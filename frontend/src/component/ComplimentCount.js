import React from "react";
import configData from "../config.json";
import '../css/text-shadow-black.css'

let cat = "image/cat/pushistaya_semka_small.png"

const timeout = 20000;

class ComplimentCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            complimentCount: ""
        };
    }

    componentDidMount() {
        this.fetch()
        this.complimentCount = setInterval(
            () => this.fetch(),
            timeout
        )
    }

    componentWillUnmount() {
        clearInterval(this.complimentCount)
    }

    fetch() {
        fetch(configData.RANDOM_COMPLIMENT_HOST + "/compliments/received")
            .then(res => res.text())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        complimentCount: result
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
        const { error, isLoaded, complimentCount } = this.state;
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
                                <span>Compliments received: {complimentCount}</span>
                            </td>
                        </tr>
                    </table>
                </div>
            );
        }
    }
}

export default ComplimentCount