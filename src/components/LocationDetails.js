import React from "react";
import PropTypes from "prop-types";

const LocationDetails = ({ city, country, errorMessage }) => {
  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1 className="location-details">{`${city}, ${country}`}</h1>
  );
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.func.isRequired,
};

export default LocationDetails;
