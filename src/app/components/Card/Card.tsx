import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { News } from '../../../types'
import { StyledBoxCard, StyledTypography } from '../../styles/styledComponents'
import { PublishDate } from './PublishDate'
import Arrow from '../../assets/Arrow.svg'
import ImageNotFound from '../../assets/notFoundImg.jpeg'
import { CardDescription } from './CardDescription'
import { CardTitle } from './CardTitle'

export const Card: React.FC<Props> = ({ newsData }) => {

  return (
    <Link
      to={`/news/${newsData.id}`}
      style={{ textDecoration: 'none', color: '#363636' }}
    >
      <StyledBoxCard>
        <img
          src={newsData.imageUrl ? newsData.imageUrl : ImageNotFound}
          style={{
            height: '217px',
            width: '400px',
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
          }}
        />
        <Box
          sx={{
            height: '270px',
            padding: '25px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyItems: 'start',
          }}
        >
          <PublishDate publishedAt={newsData.publishedAt} />
          <CardTitle newsData={newsData} />
          <CardDescription newsData={newsData} />

          <StyledTypography
            sx={{ marginTop: 'auto', alignSelf: 'start', fontWeight: 700, lineHeight: '24px' }}
          >
            Read More <img src={Arrow} alt='Arrow' />
          </StyledTypography>
        </Box>
      </StyledBoxCard>
    </Link>
  )
}

type Props = {
  newsData: News
}
