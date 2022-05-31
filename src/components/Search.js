import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search">
      <input
        type="search"
        onChange={handleChange}
        value={searchTerm}
        placeholder="Search Character"
      ></input>
    </div>
  );
}

export default Search;
