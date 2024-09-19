import "./App.css";
import { useState } from "react";

const api = {
  key: "5972b617b16696846cef63479da62be5",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App" id="mainDiv">
      <header className="App-header">
        {/* HEADER  */}
        <h1 id="mainTitle">Weather App</h1>

        {/* Search Box - Input + Button  */}
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p id="cityName">{weather.name}</p>

            {/* Temperature Celsius  */}
            <p id="temp">{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p id="weatherType">{weather.weather[0].main}</p>
            <p id="Description">({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;
