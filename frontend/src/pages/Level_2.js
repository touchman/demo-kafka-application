import React from 'react';
import '../css/Home.css';
import Compliment from "../component/Compliment";
import {Puzzle, startGame} from "../component/puzzle/puzzle";
import NextPage from "../component/NextPage";
import RotatingElements from "../component/RotatingElements";
import '../css/Level_2.css'
import ComplimentCount from "../component/ComplimentCount";

let logos = ["image/other/leg.png", "image/nata/fighter.png"]


var images = [
    {src: "image/nata/me_and_nata.png", title: 'London Bridge'},
];

class Level_2 extends React.Component {
    componentDidMount() {
        startGame(images);
    }

    render() {
        return (
            <div className="Puzzle Level2">
                <div className="row">
                    <RotatingElements logos={logos}/>
                    <RotatingElements logos={logos}/>
                    <RotatingElements logos={logos}/>
                </div>
                <Compliment/>
                <Puzzle images={images}/>
                <NextPage nextPageLink={"level3"}/>
                <div className="row">
                    <RotatingElements logos={logos}/>
                    <RotatingElements logos={logos}/>
                    <RotatingElements logos={logos}/>
                </div>
                <ComplimentCount/>
            </div>
        );
    }
}

export default Level_2;
