import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ searchText, setSearchText }) => {
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search-form">
      <input type="text" value={searchText} onChange={handleInputChange} />
      <button type="submit">Search</button>
    </div>
  );
};

SearchForm.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};

export default SearchForm;
