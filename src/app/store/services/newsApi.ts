import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { NewsList } from './types'

const apiKey = process.env.REACT_APP_NEWS_API_KEY || 'Api Key'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
  endpoints: (builder) => ({
    getTrendingNews: builder.query<NewsList, { country: string }>({
      query: ({ country }) => {
        return `top-headlines?country=${country}&apiKey=${apiKey}`
      },
    }),
  }),
})

export const { useGetTrendingNewsQuery } = newsApi
