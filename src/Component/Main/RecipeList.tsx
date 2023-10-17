import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import RecipeListStyle from "../../styled/RecipeListStyle";
import { Recipe } from "../Fn/Interface/Recipe";
import recipeLoad from "../Fn/RecipeLoad";

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipeData = await recipeLoad();
        setRecipes(recipeData);
      } catch (error) {
        console.error("데이터를 불러오는 중 에러가 발생했습니다:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <RecipeListStyle>
      <div className="page-container">
        <div className="recipe-grid">
          {recipes.map((recipe, index) => (
            <Link to={`/Recipe/${recipe.ID}`} key={index} className="recipe-card">
              <img src={recipe.Image} alt={recipe.Name} />
              <h3>{recipe.Name}</h3>
              <span>{recipe.Garnish}</span>
            </Link>
          ))}
        </div>
      </div>
    </RecipeListStyle>
  );
};
export default RecipeList;
