import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
    //// 1 constructor : define variables
    // to write less code. instead of 'constructor()' method
    state = { lat: null, errorMessage: "" };

    //#2  componentDidMount() : load data (after load page)
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    //#3  render() : just return JSX
    render() {
        if (this.state.lat && !this.state.errorMessage)
            return <SeasonDisplay lat={this.state.lat} />;
        if (!this.state.lat && this.state.errorMessage)
            return <div> Error: {this.state.errorMessage} </div>;
        return <div> Loading... Please wait </div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
