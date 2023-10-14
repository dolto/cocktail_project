import {Recipe} from "./Interface/Recipe";
import recipeLoad from "./RecipeLoad";

const cocktailNameLoad = async ():Promise<string[]> => {
    //TODO: 모든 레시피에서 칵테일 이름을 반환하는 함수
    const recipeList: Recipe[] = await recipeLoad();
    let result: string[] = [];
    recipeList.forEach(recipe => {
        result.push(recipe.Name);
    });
    //console.log(result);
    return result;
};

export default cocktailNameLoad;