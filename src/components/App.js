import "../styles/App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

const App = () => {
  const [location, setLocation] = useState({ city: "", country: "" });

  const [forecasts, setForecasts] = useState([]);

  const [selectedDate, setSelectedDate] = useState(0);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  const getForecast = () => {
    const endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

    axios.get(endpoint).then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    });
  };

  useEffect(() => {
    getForecast();
  }, []);

  const { city, country } = location;

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div className="forecast">
        <LocationDetails city={city} country={country} />
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
      </div>
    </div>
  );
};

// App.propTypes = {
//   forecasts: PropTypes.arrayOf(
//     PropTypes.shape({
//       date: PropTypes.number.isRequired,
//       description: PropTypes.string.isRequired,
//       icon: PropTypes.string.isRequired,
//       temperature: PropTypes.shape({
//         min: PropTypes.number,
//         max: PropTypes.number,
//       }),
//     })
//   ).isRequired,
//   location: PropTypes.shape({
//     city: PropTypes.string,
//     country: PropTypes.string,
//   }).isRequired,
// };

export default App;
