import { Typography, Button, Dialog, DialogContent, DialogTitle,Box } from '@mui/material'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from "@tanstack/react-router";
import { useTheme } from '@mui/material/styles';
import {createStyles} from "./ErrorDialog.styles"

interface ErrorDialogProps {
  open: boolean
  onClose: () => void
  message?: string
  code?: number
}

export default function ErrorDialog({ open, onClose, message, code }: ErrorDialogProps) {
      const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box className={styles.iconBox}>
          <FaExclamationTriangle />
        </Box>
      </DialogTitle>

      <DialogContent sx={{ textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          {code || "Failed"}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {message || 'Oops! Page not found.'}
        </Typography>
        <Typography className={styles.messageText} variant="body1">
          The page you are looking for might have been removed or is temporarily unavailable.
        </Typography>
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