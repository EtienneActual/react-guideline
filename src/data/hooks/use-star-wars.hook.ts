import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchStarWarsFilms } from '@/data/services/star-wars.service';
import { StarWars } from '../interfaces/star-wars.interface';

export const useStarWars = () => {
  return useSuspenseQuery<StarWars[]>({
    queryKey: ['starWarsFilms'],
    queryFn: fetchStarWarsFilms,
  });
};
