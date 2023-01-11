import React from "react";
import "./RecipeTitle.css";
const RecipeTitle = ({ recipe }) => {
  return (
    <div className="recipeTitle">
      <img
        className="recipeTitle__image"
        src={recipe["recipe"].image}
        alt="title-image"
      />
      <p className="recipeTitle__name">{recipe["recipe"].label}</p>
    </div>
  );
};

export default RecipeTitle;
