// REACT
import { FaStar, FaRegStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// ESTILOS
import '../movieCard/MovieCard.css'


const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {

  return (
    <div className='container-grid'>
      <div className="movie-card"> 

          <img src={imageUrl + movie.poster_path} alt={movie.title} />
       
        <h2 key={movie.id}>{movie.title}</h2>
            {movie.vote_average ? (
        <p className="styles.rate">
          <FaRegStar className="star" />
          {movie.vote_average.toFixed(1)}
        </p>
      ) : (
        <p>No rating available</p>
      )}

      </div>
      {showLink && <Link to={`/api_TMDB_Com_React/movies/${movie.id}`}>
      <button className='btn-details'>Ver detalhes</button>
      </Link>}
    </div>
  )
}

export default MovieCard