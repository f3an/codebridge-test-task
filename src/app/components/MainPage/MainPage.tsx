import React from 'react'
import { Box } from '@mui/system'
import { News } from '../../../types'
import { useGetTrendingNewsQuery } from '../../store/services/newsApi'
import { Results } from './Results'
import { Search } from './Search'
import { Card } from '../Card/Card'

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
      {!isLoading && data ? <Results newsList={data} /> : ''}

      <Box sx={{ display: 'flex', gap: '45px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {!isLoading && data
          ? data.articles.map((News: News, key = 0) => <Card newsData={News} key={key} />)
          : ''}
      </Box>
    </Box>
  )
}
