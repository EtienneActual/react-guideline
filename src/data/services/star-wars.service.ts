import { QueryResponse } from '../interfaces/star-wars.interface';

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

export const fetchStarWarsFilms = async (): Promise<QueryResponse> => {
  const response = await fetch(STAR_WARS_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Star Wars films');
  }

  return response.json();
};
