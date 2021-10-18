import React from 'react';
import '../css/Home.css';
import Compliment from "../component/Compliment";
import {Puzzle, startGame} from "../component/puzzle/puzzle";
import NextPage from "../component/NextPage";
import RotatingElements from "../component/RotatingElements";
import '../css/Level_3.css'

let logos = ["image/other/leg.png", "image/nata/fighter.png"]

var images = [
    {src: "image/nata/me_and_cat.png", title: 'London Bridge'},
];

class Level_3 extends React.Component {
    componentDidMount() {
        startGame(images);
    }

    render() {
        return (
            <div className="Puzzle Level3">
                <div className="row">
                    <RotatingElements logos={logos}/>
                    <RotatingElements logos={logos}/>
                    <RotatingElements logos={logos}/>
                </div>
                <Compliment/>
                <Puzzle images={images}/>
                <NextPage nextPageLink={"level4"}/>
            </div>
        );
    }
}

export default Level_3;
