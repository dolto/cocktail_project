import Recipe from "./Interface/Recipe";
import recipeLoad from "./RecipeLoad";

const searchRecipeCocktailName = (arg:string): Recipe[] => {
    //TODO: 입력받은 칵테일 명으로, 레시피를 검색하여 반환하는 기능
    const recipeList = recipeLoad();
    let result: Recipe[] = [];

    return result;
};

export default searchRecipeCocktailName;