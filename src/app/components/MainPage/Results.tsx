import { Box } from '@mui/system'
import React from 'react'
import { NewsList } from '../../../types'
import { StyledTypography } from '../../styles/styledComponents'

export const Results: React.FC<Props> = ({ newsList }) => {
  return (
    <Box sx={{ marginY: '40px', paddingBottom: '5px', borderBottom: '1px solid #EAEAEA' }}>
      <StyledTypography>Results: {newsList.length}</StyledTypography>
    </Box>
  )
}

type Props = {
  newsList: NewsList
}
