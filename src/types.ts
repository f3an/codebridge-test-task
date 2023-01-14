export type News = {
  author: string
  title: string
  content: string
  description: string
  publishedAt: string
  source: Source
  url: string
  urlToImage: string
}

export type Source = {
  id: string
  name: string
}

export type NewsList = {
  status: string
  totalResults: number
  articles: News[]
}
