import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div class="WeatherForecast">
      <div className="row">
        <div className="col">
          <div class="day">Thu</div>
          <WeatherIcon icon="01d" size={32} />
          <div class="temperatures">
            <span class="maximum">19°</span> <span class="minimum">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
