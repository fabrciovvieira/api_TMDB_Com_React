// REACT
import { FaSearch } from "react-icons/fa";


// HOOKS
import { useTopMoviesUrl } from '../hooks/useTopMoviesUrl.jsx';

// COMPONENTES
import MovieCard from '../components/movieCard/MovieCard.jsx';

// ESTILOS
import './Home.css'
import '../pages/Home.css'
import SearchBar from '../components/searchBar/SearchBar.jsx';


const Home = () => {

  const [topMovies] = useTopMoviesUrl()

  {!topMovies && <div className="loading"></div>}

  return (
    <div>
      <SearchBar />
      <div className="container">
        <h2 className="title">Filmes mais bem avaliados</h2>
        <div className="movies-container">
                   {topMovies.length > 0 ? (
            topMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p>Nenhum filme encontrado</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home