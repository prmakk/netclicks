import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import RecommendedMovie from "./RecommendedMovie";

const RecommendedMovies = () => {
    const [recommended, setRecommended] = useState({})
    const { id } = useParams()

    const getRecommendedMovies = (id) => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1&api_key=d42d7d1e0db582adac2ddb0f20141cfd`
        )
            .then((response) => response.json())
            .then((response) => {
                const filteredMovies = filterRecommendedMovies(
                    response.results
                );
                setRecommended(filteredMovies);
            })
            .catch((err) => console.error(err))
    };

    const filterRecommendedMovies = (movies) => {
        return movies.slice(0, 5);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        getRecommendedMovies(id);
        // eslint-disable-next-line
    }, [id]);

    console.log(recommended);

    return (
        <div className="recommended" id="best">
            <h3>You might like</h3>
            <div className="recommended__movies">
                {recommended.length > 0 ? (
                    recommended.map((movie) => (
                        <Link to={`/movie/${movie.id}`} onClick={scrollToTop} key={movie.id}>
                            <RecommendedMovie movie={movie} />
                        </Link>
                    ))
                ) : (
                    <p>Recommended movies are not available at this time</p>
                )}
            </div>
        </div>
    );
};

export default RecommendedMovies;
