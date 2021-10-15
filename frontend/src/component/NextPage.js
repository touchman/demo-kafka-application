import React from "react";
import {NavLink} from "react-router-dom";

class NextPage extends React.Component {
    render() {
        return (
            <div id="result" className="result" hidden>
                <span>Finished, Boosya you are the best, go to the next level!</span>
                <br/>
                <NavLink to={this.props.nextPageLink}>{this.props.nextPageLink}</NavLink>
            </div>
        )
    }
}

export default NextPage;