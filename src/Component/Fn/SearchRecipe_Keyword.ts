import {Recipe, Ingredients} from "./Interface/Recipe";
import recipeLoad from "./RecipeLoad";

const searchRecipeKeyword =  async (baseList:Recipe[] ,arg:string[]): Promise<[Recipe[], Recipe[]]> => {
    //TODO: 입력받은 키워드들로, 레시피를 검색하여 반환하는 기능
    if(arg.length === 0){
        let result: Recipe[] = await recipeLoad();
        return [result, []];
    }

    let result: Recipe[] = [];
    let recommend: Recipe[] = [];
    baseList.forEach((recipe) => {
        const ingredients_count = recipe.Ingredients.length;
        const removed_ingredients = recipe.Ingredients.filter(
            (ingred) => {
                let res = true;
                const _arg = arg;
                _arg.forEach((str) => {
                    if(str === ingred.Name) {
                        res = false; //존재하는 재료라면 필요 항목에서 제거
                        return false;
                    }
                });
                return res;
            }
        );
        //console.log(removed_ingredients);
        if(removed_ingredients.length === 0){
            result.push(recipe);
        }
        else if(removed_ingredients.length < ingredients_count){ //재료가 모자랄 경우 추천으로 넣음
            recommend.push(recipe);
        }
    });
    console.log([result, recommend]);
    return [result, recommend];
};

export default searchRecipeKeyword;