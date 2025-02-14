import { StarWars, StarWarsHttp } from '@/data/interfaces/star-wars.interface';
import dayjs from 'dayjs';

export const toStarWars = (response: StarWarsHttp): StarWars => ({
  title: response.title,
  director: response.director,
  releaseDate: dayjs(response.releaseDate),
  species: response.speciesConnection.species.map((species) => species.name),
});
