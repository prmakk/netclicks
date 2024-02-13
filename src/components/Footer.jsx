import React from "react";

const Footer = () => {

    const getYear = () =>{
        let newDate = new Date();
        let year = newDate.getFullYear();
        return year;
    }

    return (
        <footer className="footer">
            <p>Made by Vladyslav Pryimak (2023 - {getYear()})</p>
        </footer>
    );
};

export default Footer;
