import React from "react";

const RecipeList = ({ menu = [], selectedFilter }) => {
  const filteredMenu = selectedFilter
    ? menu.filter((item) => item.type === selectedFilter)
    : menu || [];
  console.log("menu:", menu);
  console.log("filteredMenu:", filteredMenu);
  return (
    <div>
      <h2>Filtered Recipes</h2>
      <ul>
        {filteredMenu.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
