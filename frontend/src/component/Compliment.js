import React from "react";
import configData from "../config.json";
import '../css/text-shadow-black.css'

let cat = "image/cat/pushistaya_semka_small.png"

class Compliment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            compliment: ""
        };
    }

    componentDidMount() {
        this.fetch()
        this.complement = setInterval(
            () => this.fetch(),
            configData.COMPLIMENT_UPDATE_TIMEOUT
        )
    }

    componentWillUnmount() {
        clearInterval(this.complement)
    }

    fetch() {
        fetch(configData.RANDOM_COMPLIMENT_HOST + "/compliments/random")
            .then(res => res.text())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        compliment: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, compliment } = this.state;
        if (error) {
            return <div className="text-shadow-black">Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="text-shadow-black">Loading...</div>;
        } else {
            return (
                <div className="text-shadow-black">
                    <table>
                        <tr>
                            <td>
                                <img src={cat} alt="cat"/>
                            </td>
                            <td>
                                <span>{compliment}</span>
                            </td>
                        </tr>
                    </table>
                </div>
            );
        }
    }
}

export default Compliment