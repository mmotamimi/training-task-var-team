import { Typography, Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from "@tanstack/react-router";
import { IconBox, MessageText } from "./ErrorDialog.styles"

interface ErrorDialogProps {
  open: boolean
  onClose: () => void
  message?: string
  code?: number
}

export default function ErrorDialog({ open, onClose, message, code }: ErrorDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <IconBox>
          <FaExclamationTriangle />
        </IconBox>
      </DialogTitle>

      <DialogContent sx={{ textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          {code || "Failed"}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {message || 'Oops! Page not found.'}
        </Typography>
        <MessageText variant="body1">
          The page you are looking for might have been removed or is temporarily unavailable.
        </MessageText>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/" 
          onClick={onClose}
        >
          Go to Home
        </Button>
      </DialogContent>
    </Dialog>
  )
}