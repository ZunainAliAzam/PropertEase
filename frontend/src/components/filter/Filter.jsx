import React from "react";
import "./filter.scss";
const Filter = () => {
  const handleChange = () => {
    console.log("Filter");
  };

  const handleFilter = () => {};
  return (
    <div className="filter">
      <h1>
        Search results for <b>London</b>
      </h1>

      <div className="top"> 
        <label htmlFor="city">Location</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="City Location"
          onChange={handleChange}
        />
      </div>

      <div className="bottom">
        <div className="type">
          <label htmlFor="">Type</label>
          <select name="type" id="type" onChange={handleChange}>
            <option value="">Any</option>
            <option value="house">Buy</option>
            <option value="apartment">Rent</option>
          </select>
        </div>

        <div className="property">
          <label htmlFor="">Property</label>
          <select name="property" id="property" onChange={handleChange}>
            <option value="">Any</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>

        <div className="minPrice">
          <label htmlFor="">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            min={0}
            placeholder="Min Price"
            onChange={handleChange}
          />
        </div>

        <div className="maxPrice">
          <label htmlFor="">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            min={0}
            placeholder="Max Price"
            onChange={handleChange}
          />
        </div>

        <div className="bedroom">
          <label htmlFor="">Bedroom</label>
          <input
            type="number"
            id="bedroom"
            name="bedroom"
            min={1}
            placeholder="Any"
            onChange={handleChange}
          />
        </div>

        <button onClick={handleFilter}>
          <img src="./search.png" alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
