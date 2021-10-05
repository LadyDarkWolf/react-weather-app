import React from "react";
import FriendlyDate from "./FriendlyDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FriendlyDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-md-6">
          <WeatherIcon icon={props.data.icon} />
          <span className="align-top temperature align-top">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units align-top">°C</span>
        </div>

        <div className="col-md-6">
          <ul>
            <li>Precipitation: {props.data.precipitation}%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
