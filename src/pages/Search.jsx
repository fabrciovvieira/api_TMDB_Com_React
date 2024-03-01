// REACT
import React from 'react'
import { FaSearch } from 'react-icons/fa'

//HOOKS
import { useSearchMovieUrl } from '../hooks/useSearchMovieUrl'

// COMPONENTES
import MovieCard from '../components/movieCard/MovieCard'
import SearchBar from '../components/searchBar/SearchBar'

// ESTILOS
import './Search.css'



const Search = () => {

  const [movies, query] = useSearchMovieUrl();


  return (
    <div className='container'>
      <SearchBar />
      <div className="content">
        {movies.length < 1 ? (
          <h2 className="title-result">Nenhum resultado para: <span className='query-text'>"{query}"</span></h2>
        ): (
          <h2 className="title-result">Resutados para: <span className='query-text'>"{query}"</span></h2>
        )}
        <div className="movies-container">
          {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
      </div>
    </div>
  )
}

export default Search