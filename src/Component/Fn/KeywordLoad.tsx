import Recipe from "./Interface/Recipe";
import recipeLoad from "./RecipeLoad";

const keywordLoad = async ():Promise<Set<string>> => {
    // TODO: 모든 레시피의 재료를 모으고 중복을 제거한 String 모음
    const recipeList: Recipe[] = await recipeLoad();
    let result: Set<string> = new Set();
    recipeList.forEach(recipe => {
        recipe.Ingredients.forEach(ingred => {
            result.add(ingred.Name); //Set의 데이터 특성을 이용하여 중복은 무시
        });
    });
    //console.log(result);
    return result;
}

export default keywordLoad;