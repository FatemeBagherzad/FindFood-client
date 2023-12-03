import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [ingredientFilter, setIngredientFilter] = useState("");

  const handleFilterChange = () => {
    // Pass the filters to the parent component
    onFilterChange({
      name: nameFilter,
      category: categoryFilter,
      ingredient: ingredientFilter,
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by Name"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by Category"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by Ingredient"
        value={ingredientFilter}
        onChange={(e) => setIngredientFilter(e.target.value)}
      />
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default Filter;
