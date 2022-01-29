import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    // constructor() is optional
    constructor(props) {
        super(props); // React says we Must use super(props)
        this.state = { lat: null }; //? define a state
    }

    // React says we Must use render()
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div> Latitude: {this.state.lat}</div>; //? show defined state
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
