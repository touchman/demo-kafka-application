import React from "react";
import '../css/App-logo.css'

class RotatingElements extends React.Component {
    render() {
        return (
            <div className="column">
                <img src={this.props.logos[getRandomInt(2)]} className="App-logo" alt="logo" style={{animation:  "App-logo-spin infinite " + getRandomInt(10) + "s linear"}}/>
            </div>
        )
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default RotatingElements;