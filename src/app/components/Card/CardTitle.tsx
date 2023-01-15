import React from 'react'
import { News } from '../../../types'
import { useAppSelector } from '../../hooks/storeHooks'
import { selectSearchRequest } from '../../store/storeSlices/searchSlice'
import { StyledTypography } from '../../styles/styledComponents'
import Highlighter from 'react-highlight-words'

export const CardTitle: React.FC<Props> = ({ newsData }) => {
  const searchRequest = atob(useAppSelector(selectSearchRequest)).split(' ')

  return (
    <StyledTypography
      sx={{
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '29px',
        marginY: '20px',
        height: '60px',
      }}
    >
      <Highlighter
        searchWords={searchRequest}
        autoEscape={true}
        textToHighlight={newsData.title}
        highlightStyle={{ backgroundColor: '#fff619a1' }}
      />
    </StyledTypography>
  )
}
type Props = {
  newsData: News
}
