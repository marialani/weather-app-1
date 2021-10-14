import "../styles/App.css";
import React, { useState, useEffect } from "react";
import getForecast from "../requests/getForecast";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";

const App = () => {
  const [location, setLocation] = useState({ city: "", country: "" });
  const { city, country } = location;
  const [forecasts, setForecasts] = useState([]);

  const [selectedDate, setSelectedDate] = useState(0);

  const [searchText, setSearchText] = useState("");

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleCitySearch = () => {
    getForecast(setSelectedDate, setForecasts, setLocation, searchText);
  };

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation, searchText);
  }, []);

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div className="forecast">
        <LocationDetails city={city} country={country} />
        <SearchForm
          searchText={searchText}
          setSearchText={setSearchText}
          onSubmit={handleCitySearch}
        />
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
      </div>
    </div>
  );
};

export default App;
