import { Article } from "./article-interface"

export interface NewsApiResponse {
    status: string
    totalResults: number
    articles: Article[]
}