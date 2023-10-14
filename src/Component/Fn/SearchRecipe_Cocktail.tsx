import {Recipe} from "./Interface/Recipe";

const searchRecipeCocktailName = (baseList: Recipe[],arg:string): Recipe[] => {
    //TODO: 입력받은 칵테일 명으로, 레시피를 검색하여 반환하는 기능
    let result: Recipe[] = baseList.filter(
        (recipe)=>{
            return recipe.Name.toLowerCase().includes(arg.toLowerCase());
        } //단순히 검색어에 포함된 문자열이 존재한다면 참
    );
    console.log(result);
    return result;
};

export default searchRecipeCocktailName;