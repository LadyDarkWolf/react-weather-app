import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }
  function search() {
    const apiKey = "2af1ff2de81cdd8d67552da7d4b4331d";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiBaseUrl = `https://api.openweathermap.org/data/2.5/onecall?appid=${apiKey}&lat=${latitude}&lon=${longitude}&units=metric&exclude=current,minutely,hourly,aleerts`;
    axios.get(apiBaseUrl).then(handleResponse);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecastData.days[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <p>Loading</p>;
  }
}
