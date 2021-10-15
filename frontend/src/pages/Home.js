//import logo from "../logo.svg";
import '../css/Home.css';
import React from 'react';
import Compliment from "../component/Compliment";

let logo = "image/nata/1.jpg"
const nextPage = "http://localhost:3000/level1"

function Home() {
    return (
        <header className="App-header">
            <a
                className="App-link"
                href="https://www.instagram.com/_star_in_sky_/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Boosya Luchshaya Nasha Natasha!
            </a>
            <center>
                <h1>Pyatnashki dlya Natashki</h1>
                <Compliment/>
                <img src={logo} alt="logo"/>
            </center>
            <a
                className="App-link"
                href={nextPage}
                rel="noopener noreferrer">
                Let's play!
            </a>
        </header>
    );
}


export default Home;
