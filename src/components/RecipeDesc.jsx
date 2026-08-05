import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDesc() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [id]);

  if (!recipe) return <h2>Loading...</h2>;

  return (
    <>
      <div className="productDescWrapper">
        <div className="productDescList">
          <div className="productImg">
            <img src={recipe.image} alt={recipe.name} />
          </div>
          <div className="productCt">
             <h1>{recipe.name}</h1>
            <p>{recipe.cuisine}</p>
            <p>{recipe.instructions}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeDesc;
