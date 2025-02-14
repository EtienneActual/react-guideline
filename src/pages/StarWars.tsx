import { Box, Typography, Stack } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Suspense } from 'react';
import { LoadingFallback } from '@/components/LoadingFallback';
import { StarWarsTable } from '@/components/StarWarsTable';

const StarWars = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" spacing={2} alignItems="center" mb={3}>
        <RocketLaunchIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        <Typography variant="h4">Star Wars Films</Typography>
      </Stack>
      <Suspense fallback={<LoadingFallback />}>
        <StarWarsTable />
      </Suspense>
    </Box>
  );
};

export default StarWars;
