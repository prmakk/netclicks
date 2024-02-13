import React, {useState, useEffect} from 'react'
import Movies from './Movie'

const TrendingMovies = () => {
    const [movies, setMovies] = useState({})
    const [page, setPage] = useState(1)
 
    const fetchBestMovies = async (page) => {
        fetch(
            `https://api.themoviedb.org/3/movie/now_playing?include_adult=false&include_video=true&language=en-US&page=${page}}&sort_by=popularity.desc&api_key=d42d7d1e0db582adac2ddb0f20141cfd`
        )
            .then((response) => response.json())
            .then((response) => setMovies(response))
            .catch((err) => console.error(err))
    }

    const handlePage = (page) =>{
        setPage(page)
        fetchBestMovies(page)
    }

    useEffect(() => {
        fetchBestMovies(page)
    }, [page]);

    return (
        <div className="gridForMovies" id='trending'>
            <h3>Trending</h3>
            <div className="movies">
                {movies && movies.results && movies.results.length > 0 && (
                    movies.results.map((movie) => (
                        <Movies movie={movie} key={movie.id}/>
                    ))
                )}
            </div>
            

            <div className="pages">
                <ul>
                    {[1,2,3,4,5].map( (num) => (
                        <li
                            key={num}
                            onClick={() => handlePage(num)}
                            className={page === num ? "_active" : null}
                        >
                            {num}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    );
}

export default TrendingMovies