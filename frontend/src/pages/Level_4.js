import React from 'react';
import '../css/Home.css';
import Compliment from "../component/Compliment";
import {Puzzle, startGame} from "../component/puzzle/puzzle";
import NextPage from "../component/NextPage";
import RotatingElements from "../component/RotatingElements";
import '../css/Level_4.css'

let logos = ["image/other/leg.png", "image/nata/fighter.png"]

var images = [
    {src: "image/cat/sitting.png", title: 'London Bridge'},
];

class Level_4 extends React.Component {
    componentDidMount() {
        startGame(images);
    }

    render() {
        return (
            <div className="Puzzle Level4">
                <div className="row">
                    <RotatingElements logos={logos}/>
                    <RotatingElements logos={logos}/>
                    <RotatingElements logos={logos}/>
                </div>
                <Compliment/>
                <Puzzle images={images}/>
                <NextPage nextPageLink={"level5"}/>
            </div>
        );
    }
}

export default Level_4;
