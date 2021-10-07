//import logo from "../logo.svg";
import '../css/Home.css';

let logo = "image/nata/1.jpg"
const nextPage = "http://localhost:3000/second"

function Home() {
    return (
        <header className="App-header">
            <div className="row">
                <div className="column">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="column">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="column">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Boosya Luchshaya Nasha Natasha!
            </a>
            <center>
                <h1>Pyatnashki dlya Natashki</h1>
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
