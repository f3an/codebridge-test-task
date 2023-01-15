import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { News } from '../../../types'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { useGetNewsByIdQuery } from '../../store/services/newsApi'
import { changeNewsId, selectNewsId } from '../../store/storeSlices/newsSlice'

export const NewsPage: React.FC = () => {
  const location = Number(useParams().newsId)
  const dispatch = useAppDispatch()
  const NewsId = useAppSelector(selectNewsId)

  const { data, isLoading } = useGetNewsByIdQuery<{ data: News; isLoading: boolean }>({
    query: NewsId,
  })

  useEffect(() => {
    if (location && location !== NewsId) {
      dispatch(changeNewsId(location))
    }
  }, [NewsId, dispatch, location])

  return <Box>{!isLoading ? <Box>{data.title}</Box> : 'Loading...'}</Box>
}
