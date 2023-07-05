export interface ArticleSource {
    id: string
    name: string
}

export interface Article {
    source: ArticleSource
    title: string
    description: string,
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}