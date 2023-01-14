import { Box } from '@mui/system'
import React from 'react'
import { useGetTrendingNewsQuery } from '../../store/services/newsApi'
import { Search } from './Search'

export const MainPage: React.FC = () => {
  const { data, isLoading } = useGetTrendingNewsQuery({ country: 'us' })

  if (!isLoading && data) {
    data.articles.map((news) => {
      console.log(news)
    })
  }
  return (
    <Box sx={{ paddingY: '50px', paddingX: '75px' }}>
      <Search />
    </Box>
  )
}
