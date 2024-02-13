import React, {useState} from "react";

const Movie = ({ movie }) => {
    const [isHovered, setIsHovered] = useState(false)
    const POSTER_PATH = "https://image.tmdb.org/t/p/w400/";

    return (
        <div className="movie" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="movie__poster">
                <img src={POSTER_PATH + movie.poster_path} alt="" />
                {isHovered &&
                <div className="movie__poster-info">
                    <p className="title">{movie.title}</p>
                    {movie.overview.length > 80 ? <p className="overview">{movie.overview.substr(0, 80)}...</p> : movie.overview}
                </div>
                }
            </div>

            
        </div>
    );
};

export default Movie;
