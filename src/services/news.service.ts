import axios from "axios"
import { format } from "date-fns"
const AUTHORIZATION_API_KEY = import.meta.env.VITE_API_KEY
const STROAGE_KEY = 'top-headlines'

export const newsService = {
    query,
    formatDate
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

async function query() {
    let news = localStorage.getItem(STROAGE_KEY)
    try {
        if (news) {
            return JSON.parse(news)
        }

        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${AUTHORIZATION_API_KEY}`)
        const newsFeed = res.data
        localStorage.setItem(STROAGE_KEY, JSON.stringify(newsFeed))
        news = newsFeed

        return news

    } catch (err) {
        console.log('err', err)
    }

}

function formatDate(dateStr: string) {
    const formatedDate = format(new Date(dateStr), 'eeee MMM dd, yyyy')
    return formatedDate

}