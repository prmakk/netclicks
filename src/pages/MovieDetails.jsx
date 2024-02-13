import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import Error404 from "../components/Error404";
import Genre from "../components/Genre";
import RecommendedMovies from "../components/RecommendedMovies";

const MovieDetails = () => {
    const [movie, setMovie] = useState({})
    const { id } = useParams()
    const IMAGE_URL = "https://image.tmdb.org/t/p/w400/"

    const fetchMovie = async (id) => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=d42d7d1e0db582adac2ddb0f20141cfd&append_to_response=videos`
        )
            .then((response) => response.json())
            .then((response) => setMovie(response))
            .catch((err) => console.error(err))
    };
    
    useEffect( () => {
        fetchMovie(id)
    }, [id])

    const renderTrailer = () => {
        const trailer = movie.videos.results.find(item => item.type === 'Trailer')

        if(trailer){
            return (
                <YouTube 
                    id={trailer.id} 
                    videoId={trailer.key}
                />
            )
        }else{
            return <p style={{textAlign:'center'}}>(We apologize, the trailer is not available)</p>
        }
        
        
    }

    const getTrailerTitle = () =>{
        const trailer = movie.videos.results.find(item => item.type === 'Trailer')

        if(trailer){
            return trailer.name
        }else{
            return 'Error'
        }
        
    }

    return (
        <>
        {movie && movie.status_code !== 34
            ?
            <>
                <div className="movieDetails">
                    <div className="movieDetails__image">
                        <img src={`${IMAGE_URL}${movie.poster_path}`} alt="" />
                    </div>
                    <div className="movieDetails__info">
                        <div className="movieDetails__info-title">
                            <div className="name">
                                <h3>{movie.title}</h3>
                            </div>
                            <div className="rating">
                                <img
                                    width="30"
                                    height="30"
                                    src="https://img.icons8.com/fluency/48/star--v1.png"
                                    alt="star--v1"
                                />
                                {movie.vote_average && <p>{(movie.vote_average).toFixed(1)}</p>}
                                {movie.vote_count && <p>({movie.vote_count} rated)</p>}
                            </div>
                        </div>
                        <div className="movieDetails__info-subtitle">
                            {movie.release_date && <p>Year: {movie.release_date.substr(0, 4)}</p>}
                            {movie.production_countries && <p>Countries: {movie.production_countries.map(country => country.name).join(', ')}</p>}
                            {movie.genres && <p className="genres">Genres: {movie.genres.map(genre => <Genre genre={genre.name}/>)}</p>}
                            {movie.release_date && <p>Release date: {movie.release_date.split('-').reverse().join('.')}</p>}
                            {movie.runtime && <p>Runtime: {(movie.runtime / 60).toFixed(1)} hours</p>}
                            {movie.overview && <p>Overview: {movie.overview}</p>}
                        </div>
                    </div>
                </div>

                <div className="movie__trailer">
                    <div className="movie__trailer-title">
                        {movie.videos ? <h3>{getTrailerTitle() === 'Error' ? null : getTrailerTitle()}</h3> : null}
                    </div>
                    <div className="movie__trailer-video">
                        {movie.videos ? renderTrailer() : null}
                    </div>
                </div>

                <div className="movie__recommendations">
                    <RecommendedMovies movie={movie} key={movie.id}/>
                </div>
            </>
            :
            <Error404 />
        }
        </>
    )
};

export default MovieDetails;
