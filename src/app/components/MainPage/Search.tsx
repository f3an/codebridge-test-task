import { Box, IconButton } from '@mui/material'
import React from 'react'
import { StyledTextField, StyledTypography } from './styledStyles'
import SearchIcon from '@mui/icons-material/Search'

export const Search: React.FC = () => {
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
        <IconButton sx={{ position: 'absolute', zIndex: '1' }}>
          <SearchIcon fontSize='large' />
        </IconButton>
        <StyledTextField fullWidth placeholder='Search...'></StyledTextField>
      </Box>
    </Box>
  )
}
