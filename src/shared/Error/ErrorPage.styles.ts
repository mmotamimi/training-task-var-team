import { styled } from '@mui/material/styles'
import { Container, Box, Typography } from '@mui/material'

export const StyledContainer = styled(Container)(() => ({
  height: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}))

export const IconBox = styled(Box)(({ theme }) => ({
  fontSize: 80,
  color: theme.palette.error.main,
  marginBottom: theme.spacing(2),
}))

export const MessageText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  color: theme.palette.text.secondary,
}))