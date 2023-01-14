import { Box } from '@mui/system'
import React from 'react'
import { News } from '../../../types'
import { StyledTypography } from '../../styles/styledComponents'

export const CardDescription: React.FC<Props> = ({ newsData }) => {
  return (
    <Box>
      <StyledTypography
        sx={{ fontSize: '24px', fontWeight: '400', lineHeight: '29px', marginY: '20px' }}
      >
        {getTitle(newsData)}
      </StyledTypography>

      <StyledTypography sx={{ marginBottom: '20px', fontWeight: 400, lineHeight: '24px' }}>
        {getDescription(newsData)}
      </StyledTypography>
    </Box>
  )
}

const getTitle = (newsData: News) => {
  if (newsData.title.length > 37) {
    return `${newsData.title.split('-')[0].slice(0, 37)}...`
  }
  return newsData.title
}

const getDescription = (newsData: News) => {
  if (newsData.description && newsData.description.length > 139) {
    return `${newsData.description.slice(0, 139)}...`
  }
  return newsData.description
}

type Props = {
  newsData: News
}
