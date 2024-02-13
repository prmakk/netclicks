import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const RecentMovies = () => {
    const [movies, setMovies] = useState({})
    const [swiper, setSwiper] = useState(null)
    const MOVIE_BACKDROP = "https://image.tmdb.org/t/p/w1280/"

    const fetchRecentMovies = async () => {
        fetch(
            "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&api_key=d42d7d1e0db582adac2ddb0f20141cfd"
        )
            .then((response) => response.json())
            .then((response) => setMovies(response))
            .catch((err) => console.error(err));

    }

    useEffect(() => {
        fetchRecentMovies()
    }, []);

    return (
        <div className="sliderMovies">
            <div className="sliderMovies__nav">
                <button onClick={() => swiper.slidePrev()}>
                    <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios/50/ffffff/circled-left-2.png"
                        alt="circled-left-2"
                    />
                </button>
                <button onClick={() => swiper.slideNext()}>
                    <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios/50/ffffff/circled-right-2.png"
                        alt="circled-left-2"
                    />
                </button>
            </div>

            {movies && movies.results && movies.results.length > 0 && (
                <Swiper
                    loop={true}
                    onSwiper={(s) => setSwiper(s)}
                    slidesPerView={1}
                >
                    {movies.results.map((movie) => (
                        <SwiperSlide key={movie.poster_path}>
                            <div className="sliderMovies__movie">
                                <div className="image">
                                    <img
                                        src={MOVIE_BACKDROP + movie.backdrop_path}
                                        alt="poster"
                                    />
                                </div>
                                <div className="info">
                                    <div className="info__title">
                                        <p>{movie.title}</p>
                                    </div>
                                    <div className="info__subtitle">
                                        <p>{movie.overview}</p>
                                    </div>

                                    <div className="info__additional">
                                        <div className="vote">
                                            <img
                                                width="30"
                                                height="30"
                                                src="https://img.icons8.com/fluency/48/star--v1.png"
                                                alt="star--v1"
                                            />
                                            <p>{(movie.vote_average).toFixed(1)}</p>
                                        </div>
                                        <p>{movie.release_date.substr(0, 4)}</p>
                                        <Link to={`/movie/${movie.id}`}>Play trailer</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default RecentMovies;
