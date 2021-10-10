import React from "react";
import PropTypes from "prop-types";

const ForecastDetails = ({ forecast }) => {
  const { temperature, wind, humidity } = forecast;
  return (
    <div className="forecast-details">
      <div>{`Wind Speed: ${wind.speed} Direction: ${wind.direction}`} </div>
      <div>{`Humidity: ${humidity}`}</div>
      <div>{`Temp: ${temperature.min} - ${temperature.max}`}</div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
      direction: PropTypes.string.isRequired,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
