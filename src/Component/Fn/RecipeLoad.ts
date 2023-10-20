import getData from "./GetDataFn";
import {Recipe} from "./Interface/Recipe";

interface Cocktail_api {
    "Cocktail":{
        "Cocktail recipe": []
    }
}

const recipeLoad = async (): Promise<Recipe[]> => {
    // TODO: 모든 레시피 리스트를 반환하는 함수
    let result: Recipe[] = [];
    const base_data: Cocktail_api = await getData(
        'PowerGanjiHongin',
        'IBA_Cocktail_recipe_API',
        'Cocktail_recipe_API_Json.json') as Cocktail_api;
    
    // console.log("베이스 데이터는 ")
    // console.log(base_data);
    if(base_data != null){
        result = base_data['Cocktail']['Cocktail recipe'];
    }
    // console.log("레시피 데이터는 ")
    // console.log(result);
    //console.log("Loaded Recipes:", result); // 레시피 데이터 확인용
    return result;
};

export default recipeLoad;