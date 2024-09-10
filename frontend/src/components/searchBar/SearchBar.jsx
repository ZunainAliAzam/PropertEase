import React, { useState } from "react";
import "./searchBar.scss";

const SearchBar = () => {
  const types = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (type) => {
    setQuery({...query, type });
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" placeholder="Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000000}
          placeholder="Max Price"
        />
        <button type="submit">
          <img src="./search.png" alt="search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
