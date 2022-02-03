import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    //#1  constructor : define variables
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: "" };
    }

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
            return <div> Latitude: {this.state.lat} </div>;
        if (!this.state.lat && this.state.errorMessage)
            return <div> Error: {this.state.errorMessage} </div>;
        return <div> Loading... Please wait </div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
