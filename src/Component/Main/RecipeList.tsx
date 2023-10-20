import { Link } from "react-router-dom"; 
import RecipeListStyle from "../../styled/RecipeListStyle";
import { Recipe } from "../Fn/Interface/Recipe";
import { useRecoilState } from "recoil";
import { Recipes } from "../atom";

const RecipeList = () => {
  // const [recipes, setRecipes] = useState<Recipe[]>([]);
  let [getrecipes] = useRecoilState<[Recipe[],Recipe[]]>(Recipes);
  return (
    <RecipeListStyle>
      <section className="page-container">
        <nav className="recipe-grid">
          {getrecipes[0].map((recipe, i) => (
            <Link to={`/Recipe/Info?id=${recipe.ID}`} key={recipe.ID} className="recipe-card" style={
              {
                transform: "translate(0, 2rem)",
                opacity: 0.05,
                animation: 'identifier 0.7s forwards',
                animationDelay: `${(i + 1) * 0.2}s`
              }
            }>
              <img src={recipe.Image} alt={recipe.Name} />
              <span>{recipe.Name}</span>
              <h3>{recipe.Kor_name}</h3>
              <p>{recipe.Taste}</p>
            </Link>
          ))}
        </nav>
        {getrecipes[1].length > 0?
              <article className="oneMoreNeed">
                <hr />
                <p>재료 하나가 모자란 레시피</p>
                <hr />
              </article>:
              <></>}

        
        <nav className="recipe-grid">
          {getrecipes[1].map((recipe, i) => (
            <Link to={`/Recipe/Info?id=${recipe.ID}`} key={recipe.ID} className="recipe-card" style={
              {
                transform: "translate(0, 2rem)",
                opacity: 0.05,
                animation: 'identifier 0.7s forwards',
                animationDelay: `${(i + 1) * 0.2}s`
              }
            }>
              <img src={recipe.Image} alt={recipe.Name} />
              <span>{recipe.Name}</span>
              <h3>{recipe.Kor_name}</h3>
              <p>{recipe.Taste}</p>
            </Link>
          ))}
        </nav>
      </section>
    </RecipeListStyle>
  );
};
export default RecipeList;
