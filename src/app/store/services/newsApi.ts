import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { NewsList } from '../../../types'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
  endpoints: (builder) => ({
    getTrendingNews: builder.query({
      query: () => {
        return '/articles?_limit=21'
      },
    }),
    search: builder.query<NewsList, { query: string }>({
      query: ({ query }) => {
        return `/articles?_limit=21&_sort=id&summary_contains=${atob(query)}`
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
