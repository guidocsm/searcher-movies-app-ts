export interface Search {
    Search:       Search[];
    totalResults: string;
    Response:     string;
}

export interface ResponseMovies {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
  Type: string;
}

export interface Movies {
    title:  string;
    year:   string;
    id: string;
    type:   string;
    poster: string;
}

export enum Type {
    Movie = "movie",
    Series = "series",
}