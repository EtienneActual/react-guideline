import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useStarWars } from '@/data/hooks/use-star-wars.hook';
import { StarWars } from '@/data/interfaces/star-wars.interface';
import { createColumnHelper } from '@tanstack/react-table';
const columnHelper = createColumnHelper<StarWars>();

const columns = [
  columnHelper.accessor('title', {
    header: 'Title',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('director', {
    header: 'Director',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('releaseDate', {
    header: 'Release',
    cell: (info) => new Date(info.getValue()).toLocaleDateString(),
  }),
  columnHelper.accessor('species', {
    header: 'Species',
    cell: (info) => info.getValue().join(', '),
  }),
];

export const StarWarsTable = () => {
  const { data: response } = useStarWars();

  const films = response ?? [];

  const table = useReactTable({
    data: films,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
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
  );
};
