import React from "react";
import SliderMovies from "../components/SliderMovies";
import BestOfAllMovies from "../components/BestOfAllMovies";
import UpcomingMovies from "../components/UpcomingMovies";
import TrendingMovies from "../components/TrendingMovies";

const Home = () => {

    return (
        <div>
            <SliderMovies />
            <BestOfAllMovies />
            <TrendingMovies />
            <UpcomingMovies />
        </div>
    );
};

export default Home;
