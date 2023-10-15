import ClassLocation from "./Interface/ClassLocation";

const searchLocationOneDayClass = (loc:string, name:string, baseList:ClassLocation[]): ClassLocation[] => {
    //TODO: 원데이 클래스를 진행하는 업소 지역주소를 반환
    let result: ClassLocation[] = [];

    baseList.forEach(b => {
        const _local = b.Address_category;
        const _name = b.Shop;
        let res = false;

        if(name !== ""){
            if(_name.includes(name)){
                const __loc = _local.split('/');
                __loc.forEach((l)=>{
                    if(loc === l || loc === "all"){
                        res = true;
                        return false;
                    }
                });
            }
        }
        else{
            const __loc = _local.split('/');
            __loc.forEach((l)=>{
                if(loc === l || loc === "all"){
                    res = true;
                    return false;
                }
            });
        }

        if(res){
            result.push(b);
        }
    });
    //console.log(result);
    return result;
};

// const inputLocationClass = (text:string): Promise<string[]> => {
//     let result: string[] = [];
    
//     return result;
// }

export default searchLocationOneDayClass;