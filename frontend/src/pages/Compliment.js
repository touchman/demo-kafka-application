import React from "react";

const RANDOM_COMPLIMENT_URL = "http://localhost:8080/compliments/random";

const timeout = 7000;

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
            timeout
        )
    }

    componentWillUnmount() {
        clearInterval(this.complement)
    }

    fetch() {
        fetch(RANDOM_COMPLIMENT_URL)
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
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="compliment">
                    <span>{compliment}</span>
                </div>
            );
        }
    }
}

export default Compliment