import { Routes, Route } from "react-router-dom";

import "./styles/css/main.css";

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Header from "./components/Header";
import Error404 from "./components/Error404";
import Search from "./pages/Search";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path={"/search"} element={<Search />} />
                    <Route path={"/movie/:id"} element={<MovieDetails />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
                <Footer />
            </div>
        </div>
    );
}

export default App;
