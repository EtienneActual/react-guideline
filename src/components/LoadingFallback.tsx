import { Box, CircularProgress } from '@mui/material';

interface Props {
  children?: React.ReactNode;
}

export const LoadingFallback = ({ children = <CircularProgress /> }: Props) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>{children}</Box>
);
