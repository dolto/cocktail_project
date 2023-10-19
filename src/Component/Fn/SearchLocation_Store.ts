import LocationInfo from "./Interface/LocationInfo";
import StoreLocation from "./Interface/StoreLocation";
import storeLoad from "./StoreLoad";

const searchLocationStore = (loc:string, name:string, baseList:StoreLocation[]): StoreLocation[] => {
    //TODO: 주류판매업소 지역주소를 반환
    let result: StoreLocation[] = [];
    baseList.forEach(b => {
        const _local = b.Address_category;
        const _name = b.Name;
        let res = false;

        if(name !== ""){
            if(_name.includes(name)){
                const __loc = _local.split(' ');
                __loc.forEach((l)=>{
                    if(loc+"시" === l || loc === "all"){
                        res = true;
                        return false;
                    }
                });
            }
        }
        else{
            const __loc = _local.split(' ');
            __loc.forEach((l)=>{
                if(loc+"시" === l || loc === "all"){
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

export default searchLocationStore;