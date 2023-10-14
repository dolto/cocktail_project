import ClassLocation from "./Interface/ClassLocation";
import LocationInfo from "./Interface/LocationInfo";
import oneDayClassLoad from "./OneDayClassLoad";

const searchLocationStore = (arg:LocationInfo): ClassLocation[] => {
    //TODO: 원데이 클래스를 진행하는 업소 지역주소를 반환
    const classList: ClassLocation[] = oneDayClassLoad();
    let result: ClassLocation[] = [];

    return result;
};

export default searchLocationStore;