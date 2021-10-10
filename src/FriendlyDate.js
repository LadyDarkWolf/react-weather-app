import React from "react";

export default function FriendlyDate(props) {
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let components = props.components;
  let day = dayNames[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let output = "";
  components.map(function (component, index) {
    if (output !== "") {
      output += " ";
    }
    if (component === "day") {
      output += day;
    } else if (component === "short-day") {
      output += day.substring(0, 3);
    } else if (component === "hours-minutes") {
      output += `${hours}:${minutes}`;
    } else {
      output += "X";
    }
    return output;
  });
  return <span>{output}</span>;
}
