import LocationInfo from "./LocationInfo";

interface ClassLocation extends LocationInfo{
    // do: string,
    // si: string,
    detailed_address:string
    // bar_name: string,
    cost: string,
    class_start: Date,
    class_end: Date,
    call_info: string,
    info: string,
    curriculum: string
};

export default ClassLocation;