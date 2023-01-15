import React, { useEffect } from 'react'
import { Box } from '@mui/system'
import { News } from '../../../types'
import { useGetTrendingNewsQuery } from '../../store/services/newsApi'
import { Results } from './Results'
import { Card } from '../Card/Card'
import { Search } from '../Search/Search'
import { changeSearchRequest } from '../../store/storeSlices/searchSlice'
import { useAppDispatch } from '../../hooks/storeHooks'

export const MainPage: React.FC = () => {
  const { data, isLoading } = useGetTrendingNewsQuery({ country: 'us' })
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(changeSearchRequest(''))
  }, [dispatch])

  return (
    <Box sx={{ paddingY: '50px', paddingX: '75px' }}>
      <Search />
      {!isLoading && data ? <Results newsList={data} /> : ''}

      <Box sx={{ display: 'flex', gap: '45px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {!isLoading && data
          ? data.map((News: News, key = 0) => <Card newsData={News} key={key} />)
          : 'Loading...'}
      </Box>
    </Box>
  )
}
