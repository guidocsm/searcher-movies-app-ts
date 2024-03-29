import '@/styles/components/searcher.css'
import { type SearcherType } from '@/types/searcher'

interface Props {
  query: SearcherType,
  searching: boolean,
  sort: boolean,
  updateSearch: (searchValue: string) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleSort: () => void
  setErrorMovies: (value: string) => void
}

export function Searcher({ query, searching, sort, updateSearch, handleSubmit, handleSort, setErrorMovies }: Props) {
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="query"
        value={query}
        placeholder="Star Wars, Spiderman..." 
        onChange={(e) => {
          updateSearch(e.target.value)
        }}
        onFocus={() => setErrorMovies('')}
      />
      <button
        onClick={handleSort} 
        type="button"
      >
        {sort ? 'Sort randomly' : 'Sort by year' }
      </button>
      <button type="submit">Search</button>
      {searching && 
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      }
    </form>
  )
}