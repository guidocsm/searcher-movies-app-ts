import {type Movies, type ResponseMovies } from "@/types/movies"
import { type SearcherType } from "@/types/searcher"

const API_URL = 'https://www.omdbapi.com/?apikey=fb4030e1&s='

export const fetchMovies = async (search: SearcherType) => {
    const response = await fetch(`${API_URL}${search}`)
    const data = await response.json()

    if (data.Response === 'True') {
      const results: ResponseMovies[] = data.Search
   
      const mappedMovies: Movies[] = results.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        poster: movie.Poster,
        year: movie.Year,
        type: movie.Type
      }))
      
      return {
        data: mappedMovies,
        status: 200,
        error: '',
      }
    } else {
      const error: string = data.Error || ''

      return {
        data: [],
        status: 404,
        error,
      }
    }
  }