import { Searcher } from './components/Searcher'
import { MoviesList } from './components/movies/MoviesList'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

import './App.css'

function App() {
  const { search, error, sort, updateSearch, setError, handleSort } = useSearch()
  const { movies, searcherRef, searching, errorMovies, getMovies, setErrorMovies } = useMovies({ search, sort })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    if (searcherRef.current === search && search.length > 0) {
      setError('Must writte a different movie')
    } else if (search.length === 0) {
      setError('Cannot search an empty movie')
    } else {
      getMovies()
      searcherRef.current = search
    }
  }


  return (
    <div className="page">
      <h1>Movies Searcher</h1>
      <Searcher 
        query={search}
        searching={searching}
        sort={sort}
        updateSearch={updateSearch}
        handleSubmit={handleSubmit}
        handleSort={handleSort}
        setErrorMovies={setErrorMovies}
      />
      <span className="error">{error}</span>
      <main>
        <MoviesList 
          movies={movies} 
          errorMovies={errorMovies}
        />
      </main>
    </div>
  )
}

export default App
