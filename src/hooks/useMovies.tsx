import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { fetchMovies } from "@/services/movies";
import { type Movies } from "@/types/movies";
import { type SearcherType } from "@/types/searcher";
import { debounce } from "@/helpers/methods";

interface Props {
  search: SearcherType
  sort: boolean
}

export function useMovies({ search, sort }: Props) {
  const [movies, setMovies] = useState<Movies[]>([])
  const [errorMovies, setErrorMovies] = useState<string>('')
  const [searching, setSearching] = useState<boolean>(false)
  
  const searcherRef = useRef<SearcherType>('')

  const getMovies = useCallback(async () => {
    setSearching(true)
    const responseMovies = await fetchMovies(search)
    
    if (responseMovies.status === 200) {
      setMovies(responseMovies.data)
    } else {
      setErrorMovies(responseMovies.error)
    }

    setSearching(false)
  }, [search])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => b.year.localeCompare(a.year))
      : movies
  }, [movies, sort])

  useEffect(() => {
    if (search.length > 3) {
      const delayedSearch = debounce(getMovies, 800)
      delayedSearch()
    }
  }, [search])

  return {
    movies: sortedMovies,
    searcherRef,
    searching,
    errorMovies,
    getMovies,
    setErrorMovies
  }
}