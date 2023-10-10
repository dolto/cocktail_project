import Recipe from "./Interface/Recipe";
import recipeLoad from "./RecipeLoad";

const keywordLoad = ():string[] => {
    // TODO: 모든 레시피의 재료를 모으고 중복을 제거한 String 모음
    const recipeList: Recipe[] = recipeLoad();
    let result: string[] = [];

    return result;
}

export default keywordLoad;