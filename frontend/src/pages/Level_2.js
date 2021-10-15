import React from 'react';
import '../css/Home.css';
import Compliment from "../component/Compliment";
import {Puzzle, startGame} from "../component/puzzle/puzzle";
import NextPage from "../component/NextPage";

let logo = "image/nata/300x300.jpg"

var images = [
    {src: logo, title: 'London Bridge'},
];

const gridSize1 = 3;

class Level_1 extends React.Component {
    componentDidMount() {
        startGame(images, gridSize1);
    }

    render() {
        return (
            <div className="SecondPage">
                <div className="row">
                    <div className="column">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                    <div className="column">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                    <div className="column">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                </div>
                <Compliment/>
                <Puzzle images={images}/>
                <NextPage nextPageLink={"level3"}/>
                <div className="row">
                    <div className="column">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                    <div className="column">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                    <div className="column">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Level_1;
