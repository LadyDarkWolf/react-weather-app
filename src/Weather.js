import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-md-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-md-3">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Murrumbateman</h1>
      <ul>
        <li>Monday 15:10</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt=""
          />
          <h1 className="d-inline">15</h1>
          °C | °F
        </div>
        <div className="col-md-6">
          <ul>
            <li>Precipitation: 3%</li>
            <li>Humidity: 57%</li>
            <li>Wind: 31 </li>
          </ul>
        </div>
      </div>
      Hello from Weather
    </div>
  );
}
