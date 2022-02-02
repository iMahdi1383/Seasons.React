import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: "" }; //#1 define state
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }), //#2 update state
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    render() {
        return (
            <div>
                Latitude: {this.state.lat} {/*//#3 show state */}
                <br />
                Error: {this.state.errorMessage}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
