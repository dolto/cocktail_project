import LocationInfo from "./Interface/LocationInfo";
import StoreLocation from "./Interface/StoreLocation";
import storeLoad from "./StoreLoad";

const searchLocationStore = (arg:LocationInfo): StoreLocation[] => {
    //TODO: 주류판매업소 지역주소를 반환
    const storeList: StoreLocation[] = storeLoad();
    let result: StoreLocation[] = [];

    return result;
};

export default searchLocationStore;