import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";

const ForecastSummary = (props) => {
  const { date, temperature, description, icon } = props;
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary_date">{date}</div>
      <div className="forecast-summary_temperature">
        {temperature.max}&deg;C
      </div>
      <div className="forecast-summary_description">{description}</div>
      <div className="forecast-summary_icon" data-testid="forecast-icon">
        {icon}
      </div>
      <WeatherIcon name="owm" iconId={icon} />
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
