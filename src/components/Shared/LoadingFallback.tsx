import { Box, CircularProgress } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export const LoadingFallback = ({ children = <CircularProgress /> }: Props) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>{children}</Box>
);
