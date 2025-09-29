import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'

export const IconBox = styled(Box)(({ theme }) => ({
  fontSize: 60,
  color: theme.palette.error.main,
  textAlign: "center",
}))

export const MessageText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: theme.palette.text.secondary,
}))