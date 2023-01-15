import { Box, IconButton } from '@mui/material'
import React, { useRef } from 'react'
import { StyledTextField, StyledTypography } from '../../styles/styledComponents'
import SearchIcon from '../../assets/SearchIcon.svg'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { changeSearchRequest, selectSearchRequest } from '../../store/storeSlices/searchSlice'

export const Search: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const searchRequest = useAppSelector(selectSearchRequest)
  const searchRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (
      searchRef.current &&
      searchRequest !== searchRef.current.value &&
      searchRef.current.value !== ''
    ) {
      dispatch(changeSearchRequest(btoa(searchRef.current.value)))
      navigate(`/${btoa(searchRef.current.value)}`)
      searchRef.current.value = ''
    } else if (searchRef.current) {
      navigate('/')
      searchRef.current.value = ''
    }
  }

  return (
    <Box sx={{ width: '600px', height: '80px' }}>
      <StyledTypography variant='body1'>Filter by keywords</StyledTypography>
      <Box
        sx={{
          width: '100%',
          marginTop: '10px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <IconButton
          sx={{ position: 'absolute', zIndex: '1', marginLeft: '20px' }}
          onClick={handleClick}
        >
          <img src={SearchIcon} alt='searchIcon' width='20px' />
        </IconButton>
        <StyledTextField
          fullWidth
          placeholder='Search...'
          inputRef={searchRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleClick()
            }
          }}
        ></StyledTextField>
      </Box>
    </Box>
  )
}
