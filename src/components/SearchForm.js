import React from "react";

const SearchForm = () => {
  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="search-form">
      <input type="text" onChange={handleInputChange} />
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchForm;
