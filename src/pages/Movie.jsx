// REACT
import React from 'react'
import { Link } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";
import { BsGraphUpArrow, 
  BsGraphDownArrow, 
  BsHourglassSplit, 
  BsWallet2, 
  BsFillFileEarmarkTextFill} 
from "react-icons/bs";

// HOOKS
import { useMovieDetailsUrl } from '../hooks/useMovieDetailsUrl'

// COMPONENTES
import MovieCard from '../components/movieCard/MovieCard'

// ESTILOS
import '../pages/Movie.css'



const Movie = () => {
  const [movie, credits] = useMovieDetailsUrl()

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };


  return (
    <div className='movie-page'>
      {movie && (
        <div className='container-movie'>
          <div className="img-movie">
            <MovieCard className="card-componente" movie={movie} showLink={false} />
          </div>
          <div className="data-movie">
            {movie.tagline === "" ? (
              <p className='tagline'>{movie.tagline}</p>
            ) : (
              <p className='tagline'>"{movie.tagline}"</p>
            )}
            <div className="card-geral">
              <div className="time">
                <div className="year-release">
                  <h3>
                    <SlCalender className='icone' /> Ano de Lançamento
                  </h3>
                  <p className='year'>{movie.release_date}</p>
                </div>
                <div className="time-long">
                  <h3>
                    <BsHourglassSplit className='icone' /> Duração
                  </h3>
                  <p className='year'>{movie.runtime} <span>minutos</span></p>
                </div>
              </div>
              <div className="info-value">
                <div className="budget">
                  <h3>
                    <BsWallet2 className='icone' /> Orçamento
                  </h3>
                  <p>{formatCurrency(movie.budget)}</p>
                </div>
                <div className="revenue">
                  <h3>
                    <BsGraphUpArrow className='icone' /> Receita
                  </h3>
                  <p>{formatCurrency(movie.revenue)}</p>
                </div>
              </div>
            </div>
            <div className="description">
            <h3><BsFillFileEarmarkTextFill className='icone' /> Sinopse</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
        <div className="btn-voltar">
            <Link to="/"><button className='voltar-btn-movie'>Ir para Home</button></Link>
        </div>
    </div>
  )

  
}

export default Movie