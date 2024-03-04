// REACT
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


// COMPONENTES
import MovieCard from '../components/movieCard/MovieCard'

const moviesURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;


export function useMovieDetailsUrl() {
    const {id} = useParams();

    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [credits, setCredits] = useState(null)

    const getMovie = async (url) => {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error("Erro ao obter filme");
            }
            const data = await res.json();
            setMovie(data);
        } catch (error) {
            setError(error.message);
        }
    };
    useEffect(() => {
        const MovieUrl = `${moviesURL}${id}?${apiKEY}`
        console.log(MovieUrl)
        getMovie(MovieUrl);
    }, [id]);

    const getCreditsMovie = async (url) => {
        try {
            const res = await fetch(url);
            if(!res.ok) {
                throw new Error("Erro ao acessar créditos");
            }
            const data = await res.json();
            setCredits(data);
        } catch (error){
            setError(error.message)
        }
    }
    useEffect(() => {
        const creditsUrl = `${moviesURL}${id}/credits?${apiKEY}`
        console.log(creditsUrl)
        getCreditsMovie(creditsUrl)
    }, [])



    return [
        movie,
        error,
        credits
    ]
}
