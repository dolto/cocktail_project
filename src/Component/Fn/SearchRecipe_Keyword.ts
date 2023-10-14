import {Recipe, Ingredients} from "./Interface/Recipe";

const searchRecipeKeyword = (baseList:Recipe[] ,arg:string[]): [Recipe[], Recipe[]] => {
    //TODO: 입력받은 키워드들로, 레시피를 검색하여 반환하는 기능
    let result: Recipe[] = [];
    let recommend: Recipe[] = [];
    baseList.forEach((recipe) => {
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
        else if(removed_ingredients.length === 1){ //재료 하나가 모자랄 경우 추천으로 넣음
            recommend.push(recipe);
        }
    });
    console.log([result, recommend]);
    return [result, recommend];
};

export default searchRecipeKeyword;