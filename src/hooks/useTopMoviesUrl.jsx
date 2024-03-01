import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;


export function useTopMoviesUrl() {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {

        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    }

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKEY}`

        getTopRatedMovies(topRatedUrl)
    }, []);

    return [
        topMovies
    ]
}
