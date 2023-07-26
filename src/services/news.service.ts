import axios from "axios"
import { format } from "date-fns"
import { FilterBy } from "../models/filter-by"

const API_KEY = import.meta.env.VITE_API_KEY
const STROAGE_KEY = 'top-headlines'
const BASE_URL = 'https://newsapi.org/v2/'
const PAGE_SIZE = 10
const DEFAULT_COUNTRY_CODE = 'us'

export enum FilterOptions {
    EVERYTHING = "everything",
    TOP_HEADLONES = "top-headlines",
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

export const newsService = {
    query,
    formatDate,
    fetchInitialArticles
}

export const mockArticle = {
    source: {
        id: "WGAL Susquehanna Valley Pa.",
        name: "WGAL Susquehanna Valley Pa."
    },
    // author: null,
    title: "Sheetz drops gas prices to $1.776 a gallon for Fourth of July - WGAL Susquehanna Valley Pa.",
    description: "The limited time promotion will begin at 12:01 a.m., and will last all day, or while promotional gallons last.",
    url: "https://www.wgal.com/article/sheetz-drops-gas-prices-dollar1776-gallon-fourth-of-july/44419414",
    urlToImage: "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/rhhz789d-64a2fb8118302.jpeg?crop=1.00xw:0.752xh;0,0.159xh&resize=1200:*",
    publishedAt: "2023-07-04T10:35:00Z",
    content: "ALTOONA, Pa. —Sheetz announced it will celebrate the Fourth of July by reducing its gas prices to $1.776 a gallon. This reduced pricing commemorates the year when the Declaration of Independence was … [+908 chars]"

}

async function query(filterBy: FilterBy, searchQuery?: string) {

    // let news = localStorage.getItem(STROAGE_KEY)
    try {
        // if (news) {
        //     return JSON.parse(news)
        // }
        const { country, source, category, type, languages } = filterBy
        const everythingUrl = `${BASE_URL}${FilterOptions.EVERYTHING}`
        const topHeadlinesUrl = `${BASE_URL}${FilterOptions.TOP_HEADLONES}`
        let reqQuery: string = ''

        if (type.value === FilterOptions.TOP_HEADLONES) {

            if (country.value !== '') {
                reqQuery = `${topHeadlinesUrl}?country=${country.value}&pageSize=${PAGE_SIZE}`
            }
            else if (category.value !== '') {
                reqQuery = `${topHeadlinesUrl}?category=${category.value}&pageSize=${PAGE_SIZE}`
            }
            else if (source.value !== '') {
                reqQuery = `${topHeadlinesUrl}?source=${source.value}&pageSize=${PAGE_SIZE}`
            }
            else if (searchQuery !== '') {
                reqQuery = `${topHeadlinesUrl}?q=${searchQuery}&pageSize=${PAGE_SIZE}`
            }
        }

        // const hardReqQuery = `https://newsapi.org/v2/top-headlines?country=${DEFAULT_COUNTRY_CODE}&pageSize=${PAGE_SIZE}`
        if (reqQuery !== '') {
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

function formatDate(dateStr: string) {
    const formatedDate = format(new Date(dateStr), 'eeee MMM dd, yyyy')
    return formatedDate

}

async function fetchInitialArticles() {
    // let news = localStorage.getItem(STROAGE_KEY)
    try {
        // if (news) {
        //     return JSON.parse(news)
        // }

        const res = await axios.get(`${BASE_URL}top-headlines?country=${DEFAULT_COUNTRY_CODE}&pageSize=${PAGE_SIZE}`, config)
        const newsFeed = res.data
        // localStorage.setItem(STROAGE_KEY, JSON.stringify(newsFeed.articles))
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

    } catch (err) {
        console.log('Cannot get sources', err)
        throw err

    }
}
