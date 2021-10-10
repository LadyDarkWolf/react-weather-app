import React from "react";
import FriendlyDate from "./FriendlyDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  let date = new Date(props.data.dt * 1000);
  return (
    <div className="WeatherForecastDay">
      <div className="day">
        {" "}
        <FriendlyDate date={date} components={["short-day"]} />
      </div>
      <WeatherIcon icon={props.data.weather[0].icon} size={32} />
      <div className="temperatures">
        <span className="maximum">{maxTemperature()}</span>{" "}
        <span className="minimum">{minTemperature()}</span>
      </div>
    </div>
  );
}
