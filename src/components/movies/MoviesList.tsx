import { type Movies } from "@/types/movies"
import { Movie } from "./Movie"

import '@/styles/components/movies/movies.css'

interface Props {
  movies: Movies[],
  errorMovies: string,
}

export function MoviesList({ movies, errorMovies }: Props) {
  if (errorMovies.length > 0) {
    return <h1>{errorMovies}</h1>
  }
  
  return (
    <>
      {movies.length > 0 
      ? <ul className="movies">
          {movies?.map(movie => (
            <li key={movie.id} className="movie">
              <Movie
                movie={movie} 
              />
            </li>
          ))}
        </ul>
      : <h1>Search your favorite movie!! :)</h1>
    }
    </>
  )
}