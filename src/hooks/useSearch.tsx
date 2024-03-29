import { type SearcherType } from "@/types/searcher"
import { useEffect, useRef, useState } from "react"


export function useSearch() {
  const [search, setSearch] = useState <SearcherType> ('')
  const [error, setError] = useState <SearcherType> ('')
  const [sort, setSort] = useState(false)

  const isFirstLoad = useRef(true)

  const updateSearch = (value: SearcherType) => {
    setSearch(value)
  }

  const handleSort = () => {
    setSort(prevValue => !prevValue)
  }

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = search.length === 0
      return
    }

    if (search.length === 0) {
      setError('Cannot search an empty movie')
      return
    }

    if (search.match((/^\d+$/))) {
      setError('Cannot search a movie with numbers')
      return
    }

    if (search.length < 3) {
      setError('Search must have at least 3 characters')
      return
    }

    setError('')
  }, [search])

  return {
    search,
    error,
    sort,
    updateSearch,
    setError,
    handleSort
  }
}