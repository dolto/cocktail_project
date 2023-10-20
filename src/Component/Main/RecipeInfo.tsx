import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RecipeInfoStyle from "../../styled/RecipeInfoStyle";
import { Recipe } from "../Fn/Interface/Recipe";
import { useRecoilState } from "recoil";
import { Recipes } from "../atom";
import recipeLoad from "../Fn/RecipeLoad";

const RecipeInfo = () => {
  const [getData, setData] = useSearchParams();
  let [selectedRecipe, setSelectedRecipe] = useState<Recipe>();

  useEffect(() => {
    const id = getData.get('id');
    recipeLoad().then(
      (res)=>{
        const result = res.find(
          recipe => recipe.ID === id
        );
        setSelectedRecipe(result);
      }
    );
  }, [getData]);

  return (
    <RecipeInfoStyle>
      {selectedRecipe && (
        <div className="recipe-container">
          <section className="left-section">
            <div className="image-container">
              <img src={selectedRecipe.Image} alt={selectedRecipe.Name} />
              <div className="overlay">
                <h2>{selectedRecipe.Name}</h2>
                <nav className="nav-info">
                  <a href="#taste">맛</a>
                  <a href="#ingredients">재료</a>
                  <a href="#recipe">레시피</a>
                  <a href="#garnish">가니쉬</a>
                  <a href="#description">설명</a>
                </nav>
              </div>
            </div>
          </section>
          <section className="right-section">
            <article>
              <section id="header">
                <span>{selectedRecipe.Name}</span>
                <h2>{selectedRecipe.Kor_name}</h2>
              </section>
              <section id="taste">
                <h2>맛</h2>
                <p>{selectedRecipe.Taste}</p>
              </section>
              <section id="ingredients">
                <h2>재료</h2>
                <ul>
                  {selectedRecipe.Ingredients.map((ingredient, index) => (
                    <li key={index} className="ingredient_list">
                      <img src={`https://raw.githubusercontent.com/PowerGanjiHongin/IBA_Cocktail_recipe_API/main/Alcohol/${ingredient.Name}.jpg`} alt={ingredient.Name} className="ingredient_img"/>
                      <div className="ingredients_info">
                        <p>{ingredient.Name}</p>
                        <p>{ingredient.Volume} </p> 
                        {ingredient.Optional ? <p>(Optional)</p> : <></>}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
              <section id="recipe">
                <h2>레시피</h2>
                <ul>
                  {selectedRecipe.Method.split("\n").map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>
              <section id="garnish">
                <h2>가니쉬</h2>
                <p>{selectedRecipe.Garnish}</p>
              </section>
              <section id="description">
                <h2>설명</h2>
                <p>{selectedRecipe.Histoy}</p>
              </section>
            </article>
          </section>
        </div>
      )}
    </RecipeInfoStyle>
  );
};

export default RecipeInfo;
