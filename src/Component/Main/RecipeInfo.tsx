import React from "react";
import { useParams } from "react-router-dom";
import RecipeInfoStyle from "../../styled/RecipeInfoStyle";
import { Recipe, Ingredients } from "../Fn/Interface/Recipe";
import { useRecoilState } from "recoil";
import { Recipes } from "../atom";

const RecipeInfo: React.FC = () => {
  const { id } = useParams();
  const [getrecipes] = useRecoilState<[Recipe[],Recipe[]]>(Recipes);
  const selectedRecipe = getrecipes[0].concat(getrecipes[1]).find((recipe) => recipe.ID === id);

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
                    <li key={index}>
                      {ingredient.Volume} {ingredient.Name}
                      {ingredient.Optional ? " (Optional)" : ""}
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
