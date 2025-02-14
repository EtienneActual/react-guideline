import { Box, Typography, Stack } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { StarWarsTable } from '@/components/Tables/StarWarsTable';
import { AsyncBoundary } from '@/components/Shared/AsyncBoundary';

const StarWars = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" spacing={2} alignItems="center" mb={3}>
        <RocketLaunchIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        <Typography variant="h4">Star Wars Films</Typography>
      </Stack>
      <AsyncBoundary>
        <StarWarsTable />
      </AsyncBoundary>
    </Box>
  );
};

export default StarWars;
