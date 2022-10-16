import React from "react";


export default function Weathercard (props) {
    return (
        <div>
            <h1>Longitude:{props.coord.lon}</h1>
            <h1>Latitude:{props.coord.lat}</h1>
            <p>Temperature:{props.main.temp}<br />
                Pressure:{props.main.pressure}<br />
                Humidity:{props.main.humidity}
            </p>

        </div>
    );
}