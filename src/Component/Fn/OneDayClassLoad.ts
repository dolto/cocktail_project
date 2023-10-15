import getData from "./GetDataFn";
import ClassLocation from "./Interface/ClassLocation";

interface OneDayClass {
    OneDayClass:{
        ShopInfo: ClassLocation[]
    }
}

const oneDayClassLoad = async ():Promise<ClassLocation[]> => {
    //TODO: 지역별 원데이 클래스를 진행하는 바 정보를 로드
    let result: ClassLocation[] = [];
    const oneDayClass = await getData(
        "PowerGanjiHongin",
        "IBA_Cocktail_recipe_API",
        "Cocktail_OneDayClass_API_Json.json"
    ) as OneDayClass;
    result = oneDayClass["OneDayClass"]["ShopInfo"];
    return result;
};

export default oneDayClassLoad;