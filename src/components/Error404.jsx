import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="error404">
            <div className="error404__title">
                <p>page not found!</p>
            </div>
            <div className="error404__subtitle">
                <p>404</p>
            </div>
            <div className="error404__back">
                <Link to='/'>
                    Go home
                </Link>
            </div>

        </div>
    )
};

export default Error404;
