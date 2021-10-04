import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
        <footer>
          Coded by Lisa Wolf and is open-sourced with the code being found at{" "}
          <a
            href="https://github.com/LadyDarkWolf/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
