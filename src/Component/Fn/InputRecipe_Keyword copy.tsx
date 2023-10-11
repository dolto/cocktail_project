import keywordLoad from "./KeywordLoad";

const inputRecipeKeyword = async (arg:string): Promise<string[]> => {
    //TODO: 입력받은 문자열중, 어떤 재료를 입력하려고 했는지 유추하는 기능
    if(arg.length === 0){
        return [];
    }
    const keywordSet = await keywordLoad();
    const keywordList = Array.from(keywordSet);
    let result: string[] = [];

    const regex = new RegExp(arg,'giu');
    result = keywordList.filter(keyword => {
        return RegExp(regex).exec(keyword);
    });
    console.log(result);
    return result;
}

export default inputRecipeKeyword;