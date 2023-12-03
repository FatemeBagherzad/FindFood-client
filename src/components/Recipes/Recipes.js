import React from "react";

const Recipes = ({ recipes }) => {
  const { name, category, Ingredient, price, mealThumb } = recipes;
  return (
    <div className="recipe__card--container">
      {recipes.map((data) => (
        <div key={`recipe-${data.id}`} className="recipe__card">
          <img src={mealThumb} alt={name} className="recipe__card-image" />
          <div className="recipe__card-details">
            <h3 className="recipe__card-title">{name}</h3>
            <p className="recipe__card-category">{category}</p>
            <p className="recipe__card-ingredient">{Ingredient}</p>
            <p className="recipe__card-price">{price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
