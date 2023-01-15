import { configureStore } from '@reduxjs/toolkit'
import { newsApi } from './services/newsApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import searchSlice from './storeSlices/searchSlice'
import newsSlice from './storeSlices/newsSlice'

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    searchReducer: searchSlice,
    newsReducer: newsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
