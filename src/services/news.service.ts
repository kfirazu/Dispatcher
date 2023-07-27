import axios from "axios"
import { format } from "date-fns"
import { FilterBy } from "../models/filter-by"
import { Source } from "../models/source-interface"
import { Article } from "../models/article-interface"

export const newsService = {
    query,
    formatDate,
    fetchInitialArticles,
    getSources
}

const API_KEY = import.meta.env.VITE_API_KEY
const STROAGE_KEY = 'top-headlines'
const BASE_URL = `https://newsapi.org/v2/`
const PAGE_SIZE = `pageSize=${10}`
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

const everythingQuery = `${BASE_URL}${FilterOptions.EVERYTHING}`
const topHeadlinesQuery = `${BASE_URL}${FilterOptions.TOP_HEADLINES}`




async function query(filterBy: FilterBy, searchQuery?: string) {
    console.log('filterBy from service', filterBy)
    // let news = localStorage.getItem(STROAGE_KEY)
    try {
        // if (news) {
        //     return JSON.parse(news)
        // }
        const { country, source, category, type, language } = filterBy
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
            reqQuery += `?source=${language.value}&`
        }
        if (searchQuery) {
            console.log('Do I GET INTO HERE?')
            reqQuery += `?q=${searchQuery}&`
        }
        // if(reqQuery === BASE_URL + FilterOptions.TOP_HEADLINES )
        if (
            reqQuery === BASE_URL &&
            reqQuery.includes('country=') ||
            reqQuery.includes('category=') ||
            reqQuery.includes('source=') ||
            reqQuery.includes('q=')
        ) {
            reqQuery += PAGE_SIZE
            const res = await axios.get(reqQuery, config);
            const topHeadlines = res.data
            // localStorage.setItem(STROAGE_KEY, JSON.stringify(topHeadlines))

            return topHeadlines
        }

    } catch (err) {
        console.log('Failed to load articles', err)
        throw err
    }

}
// GET https://newsapi.org/v2/everything
// GET https://newsapi.org/v2/top-headlines
// const hardReqQuery = `https://newsapi.org/v2/top-headlines?country=${DEFAULT_COUNTRY_CODE}&pageSize=${PAGE_SIZE}`

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
        console.log(res.data)
        const sourcesNamesArr = res.data.sources.map((source: Source) => {
            return { id: source.id, value: source.name }

        })
        return sourcesNamesArr

    } catch (err) {
        console.log('Cannot get sources', err)
        throw err

    }
}

 function getCurrArticleListSorces(articleList: Article[]) {



}
