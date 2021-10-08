import React from "react";
import FriendlyDate from "./FriendlyDate";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  return (
    <div className="WeatherForecastDay">
      <div className="day">
        {" "}
        <FriendlyDate date={props.data.dt} />
      </div>
      <WeatherIcon icon={props.data.weather.icon} size={32} />
      <div className="temperatures">
        <span className="maximum">{maxTemperature}</span>{" "}
        <span className="minimum">{minTemperature}</span>
      </div>
    </div>
  );
}
