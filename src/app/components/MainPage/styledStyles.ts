import { styled, TextField, Typography } from '@mui/material'

export const StyledTextField = styled(TextField)`
  background: #fff;
  & label.Mui-focused {
    color: white;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #eaeaea;
  }
  & .MuiInputBase-input {
    padding-left: 60px;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #eaeaea;
    }
    &:hover fieldset {
      border-color: #eaeaea;
    }
    &.Mui-focused fieldset {
      border-color: #eaeaea;
    }
  }
`
export const StyledTypography = styled(Typography)`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;

  font-style: normal;
  font-weight: 600;

  line-height: 20px;
  /* identical to box height */

  color: #363636;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`
