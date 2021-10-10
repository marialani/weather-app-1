import "../styles/App.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

const App = ({ location, forecasts }) => {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);

  const selectedForecast = forecasts.filter(
    (forecast) => forecast.date === selectedDate
  );

  const { city, country } = location;

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div className="forecast">
        <LocationDetails city={city} country={country} />
        <ForecastSummaries forecasts={forecasts} />
        <ForecastDetails forecast={selectedForecast} />
      </div>
    </div>
  );
};

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
