export interface StarWars {
  title: string;
  director: string;
  releaseDate: string;
  species: string[];
}

export interface StarWarsHttp {
  title: string;
  director: string;
  releaseDate: string;
  speciesConnection: {
    species: Array<{
      name: string;
    }>;
  };
}

export interface QueryResponse {
  data: {
    allFilms: {
      films: StarWarsHttp[];
    };
  };
}
