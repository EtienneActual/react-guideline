import { createColumnHelper } from '@tanstack/react-table';
import { Film, Species } from '../interfaces/star-wars.interface';

const columnHelper = createColumnHelper<Film>();

export const columns = [
  columnHelper.accessor('title', {
    header: 'Title',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('director', {
    header: 'Director',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('releaseDate', {
    header: 'Release Date',
    cell: (info) => new Date(info.getValue()).toLocaleDateString(),
  }),
  columnHelper.accessor('speciesConnection.species', {
    header: 'Species',
    cell: (info) =>
      info
        .getValue()
        .map((species: Species) => species.name)
        .join(', '),
  }),
];
