export type News = {
  author: string
  title: string
  content: string
  description: string
  publishedAt: Date
  source: Source
  url: string
  urlToImage: string
}

export type Source = {
  name: string
}

export type NewsList = {
  status: string
  totalResults: number
  articles: News[]
}
