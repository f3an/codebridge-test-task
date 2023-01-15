import { Box } from '@mui/system'
import React from 'react'
import Highlighter from 'react-highlight-words'
import { News } from '../../../types'
import { useAppSelector } from '../../hooks/storeHooks'
import { selectSearchRequest } from '../../store/storeSlices/searchSlice'
import { StyledTypography } from '../../styles/styledComponents'

export const CardDescription: React.FC<Props> = ({ newsData }) => {
  const searchRequest = atob(useAppSelector(selectSearchRequest)).split(' ')
  const description = getDescription(newsData)

  return (
    <Box>
      <StyledTypography sx={{ marginBottom: '20px', fontWeight: 400, lineHeight: '24px' }}>
        <Highlighter
          searchWords={searchRequest}
          autoEscape={true}
          textToHighlight={description}
          highlightStyle={{ backgroundColor: '#fff619a1' }}
        />
      </StyledTypography>
    </Box>
  )
}

const getDescription = (newsData: News) => {
  if (newsData.summary && newsData.summary.length > 100) {
    return `${newsData.summary.slice(0, 100)}...`
  }
  return newsData.summary
}

type Props = {
  newsData: News
}
