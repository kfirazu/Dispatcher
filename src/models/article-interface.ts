
export interface Article {
    source: {
        id: string | null
        name: string
    }
    title: string
    description: string,
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}