import React, { useState } from "react";

const api = {
  key: `b1e6729d2d8a26e7641fb88bd9d945b8`,
  baseUrl: `https://api.openweathermap.org/data/2.5/`,
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (s) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Avgust",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Thuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[s.getDay()];
    let date = s.getDate();
    let month = months[s.getMonth()];
    let year = s.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main !== "undefined"
          ? weather.main.temp < 10
            ? "app cold"
            : "app"
            ? weather.main.temp > 10 && weather.main.temp > 30
              ? "app illig"
              : "app"
            : "app"
          : "app"
      }
    >
      <main className="py-3">
        <div className="search_box mt-4">
          <h4 className="fw-bold text-center mb-3">Ob hava ma'lumotlari</h4>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
            type="text"
            className="form-control input w-50"
            placeholder="...Qidiruv"
          />

          <h4 className="fw-bold mt-5 text-center">
            {typeof weather.main !== "undefined"
              ? ""
              : "Davlat nomini kiriting !"}
          </h4>
        </div>
        {typeof weather.main !== "undefined" ? (
          <div className="me-4">
            <div className="location_box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}{" "}
                <b className="gradus" style={{ fontSize: `70px` }}>
                  °C
                </b>
              </div>
              <div className="weather">{weather.weather[0].description}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
