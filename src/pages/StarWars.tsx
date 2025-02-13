import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { columns } from '../data/config/star-wars-columns.config';
import { fetchStarWarsFilms } from '../data/services/star-wars.service';

const StarWars = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['starWarsFilms'],
    queryFn: fetchStarWarsFilms,
  });

  const films = response?.data?.allFilms?.films || [];

  const table = useReactTable({
    data: films,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">Error loading data</Typography>;

  return (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" spacing={2} alignItems="center" mb={3}>
        <RocketLaunchIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        <Typography variant="h4">Star Wars Films</Typography>
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell key={header.id} sx={{ fontWeight: 'bold' }}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} hover>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StarWars;
