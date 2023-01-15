import { styled, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

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

export const StyledBoxCard = styled(Box)`
  width: 400px;
  height: 530px;

  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const StyledNewsBlock = styled(Box)`
  position: absolute;
  width: 90%;
  height: 90%;
  left: 75px;
  top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
`
