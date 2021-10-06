import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");
  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function farenheit(celcius) {
    return (celcius * 9) / 5 + 32;
  }
  if (unit === "celcius") {
    return (
      <span className="WeatherTemperature">
        <span className="align-top temperature align-top">
          {Math.round(props.celcius)}
        </span>
        <span className="units align-top">
          °C |{" "}
          <a href="/" onClick={showFarenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else if (unit === "farenheit") {
    return (
      <span className="WeatherTemperature">
        <span className="align-top temperature align-top">
          {Math.round(farenheit(props.celcius))}
        </span>
        <span className="units align-top">
          <a href="/" onClick={showCelcius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
