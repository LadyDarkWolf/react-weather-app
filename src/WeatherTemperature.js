import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span className="align-top temperature align-top">
        {Math.round(props.celcius)}
      </span>
      <span className="units align-top">°C</span>
    </span>
  );
}
