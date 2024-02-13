import React, { useEffect, useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {

    return (
        <header className="header">
            <div className="header__logo">
                <Link to='/'>Netclicks</Link>
            </div>

            <div className="header__nav">
                <nav>
                    <Link smooth to="/#best" >
                        best of all time
                    </Link>
                    <Link smooth to="/#trending">
                        trending
                    </Link>
                    <Link smooth to="/#upcoming">
                        upcoming
                    </Link>
                </nav>
            </div>

            <div className="header__searchBtn">
                <Link to={'/search'}>
                    <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/ffffff/search--v1.png" alt="search--v1"/>
                </Link>
            </div>
        </header>
    );
};

export default Header;
