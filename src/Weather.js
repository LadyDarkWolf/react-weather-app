import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      precipitation: 0,
      date: new Date((response.data.dt + response.data.timezone) * 1000),
      icon: response.data.weather[0].icon,
      ready: true,
    });
  }

  function search() {
    const apiKey = "2af1ff2de81cdd8d67552da7d4b4331d";
    let apiBaseUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=metric&q=${city}`;
    axios.get(apiBaseUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // Search for entered city
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading ...";
  }
}
