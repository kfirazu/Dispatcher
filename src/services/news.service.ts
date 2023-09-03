import axios from "axios"
import { format } from "date-fns"
import { DropdownOption, FilterBy } from "../models/filter-by"
import { Source } from "../models/source-interface"
import { Article } from "../models/article-interface"
import { httpService } from "./http.service"

export const newsService = {
    query,
    formatDate,
    fetchInitialArticles,
    getSources,
    getCurrArticleListSources,
    formatFilterDates,
    queryToBackend

}

const API_KEY = import.meta.env.VITE_API_KEY
const STROAGE_KEY = 'top-headlines'
const BASE_URL = `https://newsapi.org/v2/`
export const PAGE_SIZE = `pageSize=${10}`
const DEFAULT_COUNTRY_CODE = 'us'

export enum FilterOptions {
    EVERYTHING = "everything",
    TOP_HEADLINES = "top-headlines",
    COUNTRY = "country",
    CATEGORY = "category",
    SOURCE = "source",
    LANGUAGE = "language",

}

export enum EndpointOption {
    EVERYTHING = "everything?",
    TOP_HEADLINES = `top-headlines?`,

}

const config: { [key: string]: any } = {
    headers: {
        Authorization: `Bearer ${API_KEY}`
    },
}

async function query(filterBy: FilterBy, searchQuery?: string, page: number = 1) {
    // console.log('filterBy from service', filterBy)
    // let news = localStorage.getItem(STROAGE_KEY)
    try {
        // if (news) {
        //     return JSON.parse(news)
        // }
        const { country, source, category, type, language, sortBy, from, to } = filterBy
        // Build url request string to send to api
        let reqQuery = BASE_URL

        type?.toLowerCase() === FilterOptions.EVERYTHING
            ? reqQuery += EndpointOption.EVERYTHING
            : reqQuery += EndpointOption.TOP_HEADLINES

        if (country !== '') {
            reqQuery += `country=${country}&`
        }
        if (category !== '') {
            reqQuery += `category=${category}&`
        }
        if (source !== '') {
            reqQuery += `sources=${source}&`
        }
        if (language !== '') {
            reqQuery += `language=${language}&`
        }
        if (sortBy !== '') {
            reqQuery += `sortBy=${sortBy}&`
        }
        if (searchQuery) {
            reqQuery += `q=${searchQuery}&`
        }
        // if (dates.from !== '' && dates.to !== '') {
        //     reqQuery += `from=${dates.from}&to=${dates.to}&`
        // }
        if (from !== undefined && to !== undefined) {
            reqQuery += `from=${from}&to=${to}&`

        }
        if (page) {
            reqQuery += `page=${page}&`
        }
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
            const encodedQuery = encodeURI(reqQuery)
            const res = await axios.get(encodedQuery, config);

            // localStorage.setItem(STROAGE_KEY, JSON.stringify(topHeadlines))
            res.data.page = page
            return res.data
        }

    } catch (err) {
        console.log('Failed to load articles', err)
        throw err
    }

}

async function queryToBackend(filterBy: FilterBy, searchQuery?: string, page: number = 1) {
    try {
        const response = await httpService.post('news/articles', { filterBy, searchQuery, page })
        // console.log('articles from service:', response)
        return response

        // i need to have {res.status : string "ok", res.page: number, res.articles: Article[], totalResults: number
    } catch (err) {
        console.log('Query has failed', err)
        throw err

    }
}

// async function query() {
//     try {
//         // return await httpService.get(BASE_URL)
//         const boards = await httpService.get(BASE_URL)
//         return boards
//     } catch (err) {
//         console.log('Query has failed:', err)
//         throw err
//     }
// }
function formatDate(dateStr: string) {
    const formattedDate = format(new Date(dateStr), 'eeee MMM dd, yyyy')
    return formattedDate

}

function formatFilterDates(startDate: Date | null, endDate: Date | null) {
    if (endDate || startDate) {
        return {
            formattedStartDate: startDate ? new Date(format(startDate, 'yyyy-MM-dd')).toISOString() : null,
            formattedEndDate: endDate ? new Date(format(endDate, 'yyyy-MM-dd')).toISOString() : null
        };
    }
    return { formattedStartDate: null, formattedEndDate: null };
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

function getCurrArticleListSources(articleList: Article[]) {
    const uniqueSources = new Set<string>();

    const currArticleSourcesArr: DropdownOption[] = articleList.map((article) => {

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

