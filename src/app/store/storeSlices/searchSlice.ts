import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchRequest: '',
  },
  reducers: {
    changeSearchRequest: (state, data: PayloadAction<string>) => {
      state.searchRequest = data.payload
    },
  },
})

export const { changeSearchRequest } = searchSlice.actions

export const selectSearchRequest = (state: RootState) => state.searchReducer.searchRequest

export default searchSlice.reducer
