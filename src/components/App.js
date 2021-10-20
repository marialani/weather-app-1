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

  const [errorMessage, setErrorMessage] = useState("error");

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleCitySearch = () => {
    getForecast(
      setSelectedDate,
      setForecasts,
      setLocation,
      searchText,
      setErrorMessage
    );
  };

  useEffect(() => {
    getForecast(
      setSelectedDate,
      setForecasts,
      setLocation,
      searchText,
      setErrorMessage
    );
  }, []);

  return (
    <div className="weather-app">
      <div style={{ zIndex: "-1", position: "absolute" }} id="clouds">
        <div className="cloud x1" />
        <div className="cloud x2" />
        <div className="cloud x3" />
        <div className="cloud x4" />
        <div className="cloud x5" />
      </div>
      <h1>Weather Forecasts</h1>
      <div className="forecast">
        <LocationDetails
          city={city}
          country={country}
          errorMessage={errorMessage}
        />
        <SearchForm
          searchText={searchText}
          setSearchText={setSearchText}
          onSubmit={handleCitySearch}
        />
        {!errorMessage && (
          <>
            <ForecastSummaries
              forecasts={forecasts}
              onForecastSelect={handleForecastSelect}
            />
            {selectedForecast && (
              <ForecastDetails forecast={selectedForecast} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
