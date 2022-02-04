import React from "react";

const seasonConfig = {
    spring: {
        text: "Nothing is so beautiful as Spring! 🌸",
        iconName: "sun",
    },
    summer: {
        text: "Let's hit the beach! 🏖️",
        iconName: "life ring",
    },
    fall: {
        text: "brown leaves falls on the ground! 🍁",
        iconName: "umbrella",
    },
    winter: {
        text: "Burr... Its Chilly! 🥶 ",
        iconName: "snowflake",
    },
};

const getSeason = (lat, month) => {
    switch (month) {
        case 0: // January
        case 1: // February
        case 2: // ...
            return lat > 0 ? "winter" : "summer";
        case 3:
        case 4:
        case 5:
            return lat > 0 ? "spring" : "fall";
        case 6:
        case 7:
        case 8:
            return lat > 0 ? "summer" : "winter";
        case 9: //  ...
        case 10: // November
        case 11: // December
            return lat > 0 ? "fall" : "spring";
        default:
            return "Error : we cant get Date of your device";
    }
};

const SeasonDisplay = (props) => {
    const lat = props.lat;
    const month = new Date().getMonth();
    let season = getSeason(lat, month);
    const { text, iconName } = seasonConfig[season];

    return (
        <div>
            <i className={`icon ${iconName}`}></i>
            <h1> {text} </h1>
            <i className={`icon ${iconName}`}></i>
        </div>
    );
};

export default SeasonDisplay;
