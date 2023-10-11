import cocktailNameLoad from "./CocktailNameLoad";

const inputRecipeCocktailName = async (arg:string): Promise<string[]> => {
    //TODO: 입력받은 문자열중, 어떤 칵테일명을 입력하려고 했는지 유추하는 기능
    if(arg.length === 0){
        return [];
    }
    const cocktailNameList = await cocktailNameLoad();
    let result: string[];
    const regex = new RegExp(arg,'giu');

    result = cocktailNameList.filter(name => {
        return RegExp(regex).exec(name);
    })
    console.log(result);
    return result;
}

export default inputRecipeCocktailName;