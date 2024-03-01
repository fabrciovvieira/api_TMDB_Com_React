import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKEY = import.meta.env.VITE_API_KEY;

export function useSearchMovieUrl() {
    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);

    const query = searchParams.get('q');

    const getSearchedMovie = async (url) => {

        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    };

    useEffect(() => {

        const searchQueryUrl = `${searchURL}?${apiKEY}&query=${query}`

        getSearchedMovie(searchQueryUrl)

    }, [query]);

    return [
        movies,
        query
    ]
}
