import { Typography, Button } from '@mui/material'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from "@tanstack/react-router";
import { StyledContainer, IconBox, MessageText } from './ErrorPage.styles'
import PageContainer from '../layout/PageContainer';

interface ErrorPageProps {
  message?: string
  code?: number
}

export default function ErrorPage({ message, code }: ErrorPageProps) {
  return (
    <PageContainer>
      <StyledContainer>
        <IconBox>
          <FaExclamationTriangle />
        </IconBox>
        <Typography variant="h2" gutterBottom>
          {code || "Failed"}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {message || 'Oops! Page not found.'}
        </Typography>
        <MessageText variant="body1">
          The page you are looking for might have been removed or is temporarily unavailable.
        </MessageText>
        <Button variant="contained" color="primary" component={Link} to="/">
          Go to Home
        </Button>
      </StyledContainer>
    </PageContainer>
  )
}
