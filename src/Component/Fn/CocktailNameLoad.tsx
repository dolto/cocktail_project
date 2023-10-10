import Recipe from "./Interface/Recipe";
import recipeLoad from "./RecipeLoad";

const cocktailNameLoad = ():string[] => {
    //TODO: 모든 레시피에서 칵테일 이름을 반환하는 함수
    const recipeList: Recipe[] = recipeLoad();
    let result: string[] = [];

    return result;
};

export default cocktailNameLoad;