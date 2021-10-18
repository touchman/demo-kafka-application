import React from "react";
import {NavLink} from "react-router-dom";
import '../css/text-shadow-black.css'

class NextPage extends React.Component {
    render() {
        return (
            <div id="result" className="result text-shadow-black" hidden>
                <span>Finished, Boosya you are the best, go to the next level!</span>
                <br/>
                <NavLink to={this.props.nextPageLink}>{this.props.nextPageLink}</NavLink>
            </div>
        )
    }
}

export default NextPage;