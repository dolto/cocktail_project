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
    
    const db_data = await fetch('http://localhost:3001/getRecipes')
    const server_data : any[] = db_data.ok? await db_data.json():[]

    console.log(server_data);

    // console.log("베이스 데이터는 ")
    // console.log(base_data);
    if(base_data != null){
        result = base_data['Cocktail']['Cocktail recipe'];
    }
    result = result.concat(server_data.map((db) => {
        const result = {
            ID : db.id_recipe,
            Image : db.rcip_img,
            Name: db.en_name,
            Kor_name: db.kn_name,
            Taste : db.rcip_taste,
            Ingredients: db.ingredient,
            Method: db.rcip_recipe,
            Garnish: db.rcip_garnish,
            Histoy: db.rcip_explanation,
        }
        
        return result
    }))
    console.log(result)
    // console.log("레시피 데이터는 ")
    // console.log(result);
    //console.log("Loaded Recipes:", result); // 레시피 데이터 확인용
    return result;
};

export default recipeLoad;