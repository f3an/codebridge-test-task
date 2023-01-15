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
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '245px',
          left: 0,
          top: 0,
          background: `no-repeat url(${!isLoading && data.imageUrl ? data.imageUrl : ''}), #C4C4C4`,
          backgroundSize: 'cover',
        }}
      ></Box>

      <StyledNewsBlock>
        <StyledTypography
          sx={{
            marginTop: '35px',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '29px',
            textAlign: 'center',
          }}
        >
          {!isLoading ? data.title : ''}
        </StyledTypography>

        <Box sx={{ paddingX: '75px', paddingY: '50px' }}>
          <StyledTypography sx={{ fontWeight: 400, fontSize: '18px', lineHeight: '24px' }}>
            {!isLoading ? data.summary : ''}
            <p>
              The 2020 Worlds Most Valuable Brands Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor
              vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus
              commodo mauris enim, turpis blandit. Porttitor facilisi viverra mi lacus lacinia
              accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac faucibus
              donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis proin
              nulla. Molestie tellus sed pellentesque tortor vitae eu cras nisl. Sem facilisi amet
              vitae ultrices nullam tellus. Pellentesque eget iaculis morbi at quis eget lacus,
              aliquam etiam. Neque ipsum, placerat vel convallis nulla orci, nunc etiam.
            </p>
            <p>
              Elementum risus facilisi mauris diam amet et sed. At aliquet id amet, viverra a magna
              lorem urna. Nibh scelerisque quam quam massa amet, sollicitudin vel non. Gravida
              laoreet neque tincidunt eu egestas massa vitae nibh. Nec ullamcorper amet tortor,
              velit. Dictum pellentesque dolor sit duis sed nibh. Euismod rutrum pellentesque semper
              mattis aliquet ornare.
            </p>
            <p>
              The 2020 Worlds Most Valuable Brands Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor
              vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus
              commodo mauris enim, turpis blandit. Porttitor facilisi viverra mi lacus lacinia
              accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac faucibus
              donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis proin
              nulla. Molestie tellus sed pellentesque tortor vitae eu cras nisl. Sem facilisi amet
              vitae ultrices nullam tellus. Pellentesque eget iaculis morbi at quis eget lacus,
              aliquam etiam. Neque ipsum, placerat vel convallis nulla orci, nunc etiam.
            </p>
            <p>
              Elementum risus facilisi mauris diam amet et sed. At aliquet id amet, viverra a magna
              lorem urna. Nibh scelerisque quam quam massa amet, sollicitudin vel non. Gravida
              laoreet neque tincidunt eu egestas massa vitae nibh. Nec ullamcorper amet tortor,
              velit. Dictum pellentesque dolor sit duis sed nibh. Euismod rutrum pellentesque semper
              mattis aliquet ornare.
            </p>
          </StyledTypography>
        </Box>
      </StyledNewsBlock>

      <Box
        sx={{
          marginLeft: '168px',
          marginY: '35px',
          width: '180px',
          height: '24px',
          alignSelf: 'flex-start',
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
