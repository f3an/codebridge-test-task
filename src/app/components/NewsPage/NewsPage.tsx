import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { News } from '../../../types'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { useGetNewsByIdQuery } from '../../store/services/newsApi'
import { changeNewsId, selectNewsId } from '../../store/storeSlices/newsSlice'
import { StyledNewsBlock, StyledTypography } from '../../styles/styledComponents'
import BackArrow from '../../assets/BackArrow.svg'

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

  return (
    <Box sx={{ height: '100%', padding: '50px', display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '245px',
          left: 0,
          top: 0,
          background: `no-repeat url(${!isLoading ? data.imageUrl : ''}), #C4C4C4`,
          backgroundSize: 'cover',
        }}
      ></Box>

      <StyledNewsBlock>
        <StyledTypography
          sx={{ marginTop: '35px', fontWeight: 400, fontSize: '24px', lineHeight: '29px' }}
        >
          {!isLoading ? data.title : ''}
        </StyledTypography>

        <Box sx={{ paddingX: '75px', paddingY: '50px' }}>
          <StyledTypography sx={{ fontWeight: 400, fontSize: '18px', lineHeight: '24px' }}>
            {!isLoading ? data.summary : ''}
          </StyledTypography>
        </Box>
      </StyledNewsBlock>

      <Box
        sx={{
          marginTop: '35px',
          position: 'absolute',
          width: '180px',
          height: '24px',
          left: '168px',
          bottom: 0,
        }}
      >
        <Link to='/' style={{ textDecoration: 'none' }}>
          <StyledTypography sx={{ fontWeight: 700, lineHeight: '24px' }}>
            <img src={BackArrow} alt='Arrow' /> Back to homepage
          </StyledTypography>
        </Link>
      </Box>
    </Box>
  )
}
