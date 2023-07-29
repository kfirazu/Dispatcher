import axios from "axios"
import { format } from "date-fns"
import { DropdownOption, FilterBy } from "../models/filter-by"
import { Source } from "../models/source-interface"
import { Article } from "../models/article-interface"

export const newsService = {
    query,
    formatDate,
    fetchInitialArticles,
    getSources,
    getCurrArticleListSources,

}

const API_KEY = import.meta.env.VITE_API_KEY
const STROAGE_KEY = 'top-headlines'
const BASE_URL = `https://newsapi.org/v2/`
export const PAGE_SIZE = `pageSize=${10}`
const DEFAULT_COUNTRY_CODE = 'us'

export enum FilterOptions {
    EVERYTHING = "everything",
    TOP_HEADLINES = `top-headlines`,
    COUNTRY = "country",
    CATEGORY = "category",
    SOURCE = "source",
    LANGUAGE = "language",

}

const config: { [key: string]: any } = {
    headers: {
        Authorization: `Bearer ${API_KEY}`
    },
}

async function query(filterBy: FilterBy, searchQuery?: string, page?: number) {
    console.log('filterBy from service', filterBy)
    // let news = localStorage.getItem(STROAGE_KEY)
    try {
        // if (news) {
        //     return JSON.parse(news)
        // }
        const { country, source, category, type, language, sortBy } = filterBy
        console.log('sortBy service:', sortBy)
        // Build url request string to send to api
        let reqQuery = BASE_URL

        type.value?.toLowerCase() === FilterOptions.EVERYTHING
            ? reqQuery += FilterOptions.EVERYTHING
            : reqQuery += FilterOptions.TOP_HEADLINES

        if (country.value !== '') {
            reqQuery += `?country=${country.value}&`
        }
        if (category.value !== '') {
            reqQuery += `?category=${category.value}&`
        }
        if (source.value !== '') {
            reqQuery += `?sources=${source.value}&`
        }
        if (language.value !== '') {
            reqQuery += `?language=${language.value}&`
            console.log('reqQuery from language:', reqQuery)
        }
        if (searchQuery) {
            reqQuery += `?q=${searchQuery}&`
        }
        if (sortBy.value !== '') {
            reqQuery += `sortBy=${sortBy.value}`
        }
        // if (page) {
        //     reqQuery += `&page=${page}`
        // }
        if (
            reqQuery.startsWith(BASE_URL) &&
            (reqQuery.includes('country=') ||
                reqQuery.includes('category=') ||
                reqQuery.includes('sources=') ||
                reqQuery.includes('language=') ||
                reqQuery.includes('sortBy=') ||
                reqQuery.includes('q='))
        ) {
            reqQuery += PAGE_SIZE
            console.log('reqQuery:', reqQuery)
            const res = await axios.get(reqQuery, config);

            // localStorage.setItem(STROAGE_KEY, JSON.stringify(topHeadlines))

            return res.data
        }

    } catch (err) {
        console.log('Failed to load articles', err)
        throw err
    }

}

function formatDate(dateStr: string) {
    const formatedDate = format(new Date(dateStr), 'eeee MMM dd, yyyy')
    return formatedDate

}

async function fetchInitialArticles() {
    // let news = localStorage.getItem(STROAGE_KEY)
    try {
        // if (news) {
        // return JSON.parse(news)
        // }

        const res = await axios.get(`${BASE_URL}top-headlines?country=${DEFAULT_COUNTRY_CODE}&${PAGE_SIZE}`, config)
        const newsFeed = res.data
        // localStorage.setItem(STROAGE_KEY, JSON.stringify(newsFeed))
        return newsFeed.articles
    } catch (err) {
        console.log('Cannot get default articles', err)
        throw err
    }
}

async function getSources() {
    try {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines/sources?`, config)
        const sourcesNamesArr = res.data.sources.map((source: Source) => {
            return { value: source.id, title: source.name }

        })
        return sourcesNamesArr

    } catch (err) {
        console.log('Cannot get sources', err)
        throw err

    }
}

// function getCurrArticleListSources(articleList: Article[]) {
//     const currArticleSourcesArr = articleList.map((article) => {
//         const cleanedSourceArr = {
//             value: article.source.id,
//             title: article.source.name
//         }
//         if (cleanedSourceArr.value === null) {
//             cleanedSourceArr.value = cleanedSourceArr.title.toLowerCase()
//         }
//         if (cleanedSourceArr.value === article.source.id || cleanedSourceArr.title === article.source.name) {

//         }
//         return cleanedSourceArr
//     })
//     console.log('currArticleSourcesArr', currArticleSourcesArr)
//     return currArticleSourcesArr

// }

function getCurrArticleListSources(articleList: Article[]) {
    const uniqueSources = new Set<string>();

    const currArticleSourcesArr: DropdownOption[] = articleList.map((article) => {
        const sourceId = article.source.id;
        const sourceName = article.source.name;

        let { id, name } = article.source

        // id returns as null lots of time - assign it as the name of source.
        id === null ? id = name.toLowerCase() : id = id

        const cleanedSourceArr = {
            value: id,
            title: name
        };

        // Check if the source's value already exists in uniqueSources
        // If not, add it to uniqueSources set
        if (!uniqueSources.has(cleanedSourceArr.value)) {
            uniqueSources.add(cleanedSourceArr.value);
            return cleanedSourceArr;
        }

        // Return null for duplicate sources, 
        return null;
    }).filter(Boolean) as DropdownOption[]; // Remove any null values from the array
    return currArticleSourcesArr;
}
