import React from "react";
import "./weather-container.css";

export default function Weathercard(props) {
  return (
    <div className="weather-container">
      {props.main ? (
        <div>
          <h1>Country: {props.sys.country}</h1>
          <h1>Temperature: {props.main.temp}</h1>
          <h2>Pressure: {props.main.pressure}</h2>
          <h2>Humidity: {props.main.humidity}</h2>
        </div>
      ) : (
        <h1>{props.message}</h1>
      )}
    </div>
  );
}
