import { StarWars, QueryResponse } from '@/data/interfaces/star-wars.interface';
import { toStarWars } from '@/data/dto/star-wars.dto';

const STAR_WARS_API = import.meta.env.VITE_STAR_WARS_BASE_URL;

export const query = `
  query {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
          }
        }
      }
    }
  }
`;

export const fetchStarWarsFilms = async (): Promise<StarWars[]> => {
  try {
    const response = await fetch(STAR_WARS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Star Wars films, ${response.status}::${response.statusText}`);
    }

    const data = (await response.json()) as QueryResponse;

    if (!data.data?.allFilms?.films) {
      throw new Error(`Invalid response format from Star Wars API, ${JSON.stringify(data)}`);
    }

    return data.data.allFilms.films.map(toStarWars);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
  }
};
