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
        if (this.state.lat && !this.state.errorMessage)
            return <div> Latitude: {this.state.lat} </div>; //#3 show state
        if (!this.state.lat && this.state.errorMessage)
            return <div> Error: {this.state.errorMessage} </div>;
        return <div> Loading... Please wait </div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
