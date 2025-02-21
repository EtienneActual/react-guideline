import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
} from '@tanstack/react-table';
import { Coin } from '@/data/interfaces/coin.interface';
import { useCoins } from '@/data/hooks/use-coins.hook';
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Skeleton,
} from '@mui/material';

const columnHelper = createColumnHelper<Coin>();

const columns = [
  columnHelper.accessor('marketCapRank', {
    header: 'Rank',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <img src={info.row.original.image} alt={info.getValue()} style={{ width: 24, height: 24 }} />
        <Typography>{info.getValue()}</Typography>
        <Typography color="text.secondary" sx={{ textTransform: 'uppercase' }}>
          {info.row.original.symbol}
        </Typography>
      </Box>
    ),
  }),
  columnHelper.accessor('currentPrice', {
    header: 'Price',
    cell: (info) => `$${info.getValue().toLocaleString()}`,
  }),
  columnHelper.accessor('priceChangePercentage24hInCurrency', {
    header: '24h %',
    cell: (info) => {
      const value = info.getValue();
      if (value === null) return '-';
      const color = value >= 0 ? 'success.main' : 'error.main';
      return <Typography color={color}>{value?.toFixed(2)}%</Typography>;
    },
  }),
  columnHelper.accessor('priceChangePercentage7dInCurrency', {
    header: '7d %',
    cell: (info) => {
      const value = info.getValue();
      if (value === null) return '-';
      const color = value >= 0 ? 'success.main' : 'error.main';
      return <Typography color={color}>{value?.toFixed(2)}%</Typography>;
    },
  }),
  columnHelper.accessor('marketCap', {
    header: 'Market Cap',
    cell: (info) => `$${info.getValue().toLocaleString()}`,
  }),
  columnHelper.accessor('totalVolume', {
    header: 'Volume (24h)',
    cell: (info) => `$${info.getValue().toLocaleString()}`,
  }),
];

export const CoinTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const { data: coins } = useCoins();

  const table = useReactTable({
    data: coins ?? [],
    columns,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell key={header.id} onClick={header.column.getToggleSortingHandler()} sx={{ cursor: 'pointer' }}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {{
                    asc: ' 🔼',
                    desc: ' 🔽',
                  }[header.column.getIsSorted() as string] ?? null}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
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

export const CoinTableSkeleton = () => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          {Array.from({ length: 7 }).map((_, index) => (
            <TableCell key={index}>
              <Skeleton variant="text" width={100} />
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.from({ length: 15 }).map((_, rowIndex) => (
          <TableRow key={rowIndex}>
            {Array.from({ length: 7 }).map((_, cellIndex) => (
              <TableCell key={cellIndex}>
                <Skeleton variant="rectangular" height={40} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
