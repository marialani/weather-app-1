import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

const ForecastSummaries = ({ forecasts, onForecastSelect }) => (
  <div className="forecast-summaries">
    {forecasts.map((forecast) => (
      <ForecastSummary
        key={forecast.date}
        date={forecast.date}
        description={forecast.description}
        icon={forecast.icon.toString()}
        temperature={forecast.temperature}
        onSelect={onForecastSelect}
      />
    ))}
  </div>
);

ForecastSummaries.propTypes = {
  onForecastSelect: PropTypes.func.isRequired,
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.number.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }).isRequired,
    })
  ).isRequired,
};

export default ForecastSummaries;
