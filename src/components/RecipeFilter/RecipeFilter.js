import React from "react";

const RecipeFilter = ({ menu, selectedFilter, setSelectedFilter }) => {
  const filterOptions = menu ? [...new Set(menu.map((item) => item.type))] : [];

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div>
      <label htmlFor="filter">Filter by Type:</label>
      <select id="filter" value={selectedFilter} onChange={handleFilterChange}>
        <option value="">All</option>
        {filterOptions.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RecipeFilter;
