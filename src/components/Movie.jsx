import React, { useState } from "react";
import { Link } from "react-router-dom";

const Movie = ({movie}) => {
    const [isHovered, setIsHovered] = useState(false)
    const IMAGE_URL = "https://image.tmdb.org/t/p/w400/"

    return (
        <Link to={`/movie/${movie.id}`}>
            <div className="movies__movie">
                <div className="image" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <img src={IMAGE_URL + movie.poster_path} alt="poster" />
                    {isHovered &&
                    <div className="isHovered">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 16">
                            <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z"/>
                        </svg>
                    </div>
                }
                </div>
                <div className="info">
                    <div className="info__title">
                        {movie.title.length > 20 ? (
                            <p>{movie.title.substr(0, 22)}...</p>
                        ) : (
                            <p>{movie.title}</p>
                        )}
                    </div>
                    <div className="info__subtitle">
                        <div className="vote">
                            <img
                                width="18"
                                height="18"
                                src="https://img.icons8.com/fluency/48/star--v1.png"
                                alt="star--v1"
                            />
                            <p>{movie.vote_average.toFixed(1)}</p>
                        </div>
                        <p>{movie.release_date.substr(0, 4)}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Movie;
