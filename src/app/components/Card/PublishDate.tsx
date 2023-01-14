import React from 'react'
import { StyledTypography } from '../../styles/styledComponents'
import CalendarIcon from '../../assets/CalendarIcon.svg'

export const PublishDate: React.FC<Props> = ({ publishedAt }) => {
  const fromatedPuglishDate = getFormatedDate(publishedAt)

  return (
    <StyledTypography sx={{ fontSize: '14px', fontWeight: '400' }}>
      <img src={CalendarIcon} width='14px' /> {fromatedPuglishDate}
    </StyledTypography>
  )
}

const getOrdinalNum = (n: number) => {
  return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '')
}

const getFormatedDate = (publishedAt: string) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const puglishDate = new Date(Date.parse(publishedAt))
  return `${monthNames[puglishDate.getMonth()]} ${getOrdinalNum(
    puglishDate.getDate(),
  )}, ${puglishDate.getFullYear()}`
}

type Props = {
  publishedAt: string
}
