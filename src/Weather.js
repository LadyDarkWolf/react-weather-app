import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      precipitation: 0,
      date: "Monday 19:47",
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      ready: true,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-md-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-md-3">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-md-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="align-top temperature align-top">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units align-top">°C</span>
          </div>

          <div className="col-md-6">
            <ul>
              <li>Precipitation: {weatherData.precipitation}%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "New York";
    const apiKey = "2af1ff2de81cdd8d67552da7d4b4331d";
    let apiBaseUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=metric&q=${city}`;
    axios.get(apiBaseUrl).then(handleResponse);
    return "Loading ...";
  }
}
