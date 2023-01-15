import React, { useEffect } from 'react'
import { Box } from '@mui/system'
import { News } from '../../../types'
import { useSearchQuery } from '../../store/services/newsApi'
import { Results } from './Results'
import { Card } from '../Card/Card'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { changeSearchRequest, selectSearchRequest } from '../../store/storeSlices/searchSlice'
import { Search } from '../Search/Search'

export const SearchPage: React.FC = () => {
  const location = useParams()
  const dispatch = useAppDispatch()
  const searchRequest = useAppSelector(selectSearchRequest)
  const { data, isLoading } = useSearchQuery({ query: searchRequest })

  useEffect(() => {
    if (location.searchRequest || searchRequest !== location.searchRequest) {
      dispatch(changeSearchRequest(location.searchRequest as string))
    }
  }, [dispatch, location.page, location.searchRequest, searchRequest])

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
