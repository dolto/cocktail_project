import getData from "./GetDataFn";
import StoreLocation from "./Interface/StoreLocation";

interface StoreApi{
    Shop: StoreLocation[]
}

const storeLoad = async (): Promise<StoreLocation[]> => {
    // TODO: 주류판매 업소 리스트를 반환하는 함수
    let result: StoreLocation[] = [];

    const base_data: StoreApi = await getData(
        'PowerGanjiHongin',
        'IBA_Cocktail_recipe_API',
        'Cocktail_Shop_API_Json.json') as StoreApi;
    
    result = base_data.Shop;
    
    return result;
};

export default storeLoad;