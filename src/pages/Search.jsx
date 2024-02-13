import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import useDebounce from "../hooks/useDebounce";

const Search = () => {
    const [movies, setMovies] = useState({})
    const [input, setInput] = useState('')

    const debouncedInput = useDebounce(input, 500);

    const fetchMovies = async (film) => {
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=d42d7d1e0db582adac2ddb0f20141cfd&query=${film}&include_adult=false&language=en-US`
        )
            .then((response) => response.json())
            .then((response) => setMovies(response))
            .catch((err) => console.error(err))
    };


    useEffect( () => {
        fetchMovies(debouncedInput)
    }, [debouncedInput])

    return(
        <div className="search">
            <div className="search__input">
                <input
                    onChange={e => setInput(e.target.value)}
                    type="text" 
                    placeholder="Batman, Joker etc"
                />
            </div>

            <div className="gridForMovies" id='trending'>
                {debouncedInput
                ?
                <>
                    <h3>Results for "{debouncedInput}"</h3>
                    <div className="movies">
                        {movies && movies.results && movies.results.length > 0 && (
                            movies.results.map((movie) => (
                                <Movie movie={movie} key={movie.id}/>
                            ))
                        )}
                    </div>
                </>
                :
                null}
            </div>
        </div>
    )
};

export default Search;
