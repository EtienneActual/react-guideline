export interface Species {
  name: string;
}

export interface Film {
  title: string;
  director: string;
  releaseDate: string;
  speciesConnection: {
    species: Species[];
  };
}

export interface QueryResponse {
  data: {
    allFilms: {
      films: Film[];
    };
  };
}
