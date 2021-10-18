import React from 'react';
import '../css/Home.css';
import Compliment from "../component/Compliment";
import NextPage from "../component/NextPage";
import RotatingElements from "../component/RotatingElements";
import {Puzzle, startGame} from "../component/puzzle/puzzle";
import '../css/Level_1.css'

let logos = ["image/other/leg.png", "image/nata/fighter.png"]

var images = [
    {src: "image/nata/300x300.jpg", title: 'London Bridge'},
];

class Level_1 extends React.Component {
    componentDidMount() {
        startGame(images);
    }

    render() {
        return (
            <div className="Puzzle Level1">
                <div className="row">
                    <RotatingElements logos={logos}/>
                    <RotatingElements logos={logos}/>
                    <RotatingElements logos={logos}/>
                </div>
                <Compliment/>
                <Puzzle images={images}/>
                <NextPage nextPageLink={"level2"}/>
                <div className="row">
                    <RotatingElements logos={logos}/>
                    <RotatingElements logos={logos}/>
                    <RotatingElements logos={logos}/>
                </div>
            </div>
        );
    }
}

export default Level_1;
