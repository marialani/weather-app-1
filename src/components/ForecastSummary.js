import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => {
  const { date, temperature, description, icon } = props;

  return (
    <div className="forecast-summary">
      <div className="forecast-summary_date">{`${date}`}</div>
      <div className="forecast-summary_temperature">{`${temperature.max}`}</div>
      <div className="forecast-summary_description">{`${description}`}</div>
      <div className="forecast-summary_icon">{`${icon}`}</div>
    </div>
  );
};
ForecastSummary.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default ForecastSummary;
