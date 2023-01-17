import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { NewsList } from '../../../types'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
  endpoints: (builder) => ({
    getTrendingNews: builder.query({
      query: () => {
        return '/articles?_limit=100'
      },
    }),
    search: builder.query<NewsList, { query: string }>({
      query: ({ query }) => {
        return `/articles?_limit=100&=${atob(query)}&summary_contains=${atob(query).split(' ')[0]}`
      },
    }),
    getNewsById: builder.query<NewsList, { query: number }>({
      query: ({ query }) => {
        return `/articles/${query}`
      },
    }),
  }),
})

export const { useGetTrendingNewsQuery } = newsApi
export const { useSearchQuery } = newsApi
export const { useGetNewsByIdQuery } = newsApi
