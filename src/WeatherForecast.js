import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [forecastData, setForecastData] = useState(null);
  let [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

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
          {forecastData.map(function (dayForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dayForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    search();
    return <p>Loading</p>;
  }
}
