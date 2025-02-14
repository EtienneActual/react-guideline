import { Box, Button, Typography } from '@mui/material';

interface Props {
  error: Error;
  resetErrorBoundary: () => void;
}

export const ErrorFallback = ({ error, resetErrorBoundary }: Props) => (
  <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
    <Typography variant="h5" color="error">
      Something went wrong
    </Typography>
    <Typography color="error" sx={{ mb: 2 }}>
      {error.message} <br /> <br />
      {error.stack}
    </Typography>
    <Button variant="contained" onClick={resetErrorBoundary}>
      Try again
    </Button>
  </Box>
);
