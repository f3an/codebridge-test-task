export type News = {
  id: number
  imageUrl: string
  launches: number[]
  newsSite: string
  publishedAt: string
  summary: string
  title: string
  updatedAt: string
  url: string
}

export type NewsList = News[]
