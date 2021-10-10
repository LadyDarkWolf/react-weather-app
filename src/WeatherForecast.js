import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [forecastData, setForecastData] = useState({ loaded: false });

  function handleResponse(response) {
    if (response.data.daily) {
      let temp = response.data.daily;
      temp.loaded = true;
      setForecastData(temp);
    }
  }
  function search() {
    const apiKey = "2af1ff2de81cdd8d67552da7d4b4331d";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiBaseUrl = `https://api.openweathermap.org/data/2.5/onecall?appid=${apiKey}&lat=${latitude}&lon=${longitude}&units=metric&exclude=current,minutely,hourly,aleerts`;
    axios.get(apiBaseUrl).then(handleResponse);
  }
  if (forecastData.loaded === true) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecastData[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <p>Loading</p>;
  }
}
