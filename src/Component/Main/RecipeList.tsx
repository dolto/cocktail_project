import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import RecipeListStyle from "../../styled/RecipeListStyle";
import { Recipe } from "../Fn/Interface/Recipe";
import { useRecoilState } from "recoil";
import { Recipes } from "../atom";

const RecipeList = () => {
  // const [recipes, setRecipes] = useState<Recipe[]>([]);
  let [getrecipes, setrecipes] = useRecoilState<Recipe[]>(Recipes);
  return (
    <RecipeListStyle>
      <section className="page-container">
        <nav className="recipe-grid">
          {getrecipes.map((recipe) => (
            <Link to={`/Recipe/Info?id=${recipe.ID}`} key={recipe.ID} className="recipe-card">
              <img src={recipe.Image} alt={recipe.Name} />
              <h3>{recipe.Name}</h3>
              <span>{recipe.Garnish}</span>
            </Link>
          ))}
        </nav>
      </section>
    </RecipeListStyle>
  );
};
export default RecipeList;
