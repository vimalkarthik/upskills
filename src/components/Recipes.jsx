import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Recipes() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => {
        setItems(data.recipes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Recipes</h1>
      <div className="recipeContainer">
        {items.map((recipe) => (
              <Link
      to={`/recipe/${recipe.id}`}
      key={recipe.id}
      style={{ textDecoration: "none", color: "inherit" }}
    >
          <div key={recipe.id} className="recipeCard">
            <img src={recipe.image} alt={recipe.name} />
            <h4>{recipe.name}</h4>

            <ul className="tagsList">
              {recipe.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
