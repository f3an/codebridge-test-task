import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    id: 1
  },
  reducers: {
    changeNewsId: (state, data: PayloadAction<number>) => {
      state.id = data.payload
    },
  },
})

export const { changeNewsId } = newsSlice.actions

export const selectNewsId = (state: RootState) => state.newsReducer.id

export default newsSlice.reducer
