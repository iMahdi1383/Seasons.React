import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null }; //? Define a state

        window.navigator.geolocation.getCurrentPosition(
            // after get position, a callback function :
            (position) => {
                this.setState({ lat: position.coords.latitude }); //? Update state value, then Render Component again
            },
            (err) => console.log(err)
        );
    }

    render() {
        return <div> Latitude: {this.state.lat}</div>; //? Show state
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
