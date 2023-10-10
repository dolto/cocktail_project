import Recipe from "./Interface/Recipe";
import recipeLoad from "./RecipeLoad";

const searchRecipeKeyword = (arg:string[]): Recipe[] => {
    //TODO: 입력받은 키워드들로, 레시피를 검색하여 반환하는 기능
    const recipeList = recipeLoad();
    let result: Recipe[] = [];

    return result;
};

export default searchRecipeKeyword;