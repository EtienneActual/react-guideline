import { StarWars, StarWarsHttp } from '@/data/interfaces/star-wars.interface';

export const toStarWars = (response: StarWarsHttp): StarWars => ({
  title: response.title,
  director: response.director,
  releaseDate: response.releaseDate,
  species: response.speciesConnection.species.map((species) => species.name),
});
