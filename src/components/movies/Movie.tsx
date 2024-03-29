import { Movies } from "@/types/movies"

interface Props {
  movie: Movies
}

export function Movie({ movie }: Props) {
  return (
    <>
      <h3>{movie.title.length > 18 ? `${movie.title.substring(0, 15)}...` : movie.title}</h3>
      <span>{movie.year}</span>
      <img src={movie.poster} alt="" />
    </>
  )
}