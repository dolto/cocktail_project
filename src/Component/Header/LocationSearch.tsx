import { useEffect, useState } from "react";
import SearchBar from "../../styled/SearchBar";
import ClassLocation from "../Fn/Interface/ClassLocation";
import StoreLocation from "../Fn/Interface/StoreLocation";
import oneDayClassLoad from "../Fn/OneDayClassLoad";
import storeLoad from "../Fn/StoreLoad";
import searchLocationOneDayClass from "../Fn/SearchLocation_OneDayClass";
import searchLocationStore from "../Fn/SearchLocation_Store";
import { useRecoilState } from "recoil";
import { Classs, Stores } from "../atom";

interface Props {
    p: "store"|"class"
}

const LocationSearch = (props: Props) => {
    let [getautoword, setautoword] = useState<string[]>([]);
    let [getcategory, setcategory] = useState<string>("all");
    let [gettextvalue,settextvalue] = useState<string>("");
    let [getstorelocations, setstorelocations] = useRecoilState<StoreLocation[]>(Stores);
    let [getclasslocations, setclasslocations] = useRecoilState<ClassLocation[]>(Classs);

    useEffect(
        () => {
            storeLoad().then(
                res =>
                setstorelocations(res)
            );
            oneDayClassLoad().then(
                res => setclasslocations(res)
            );
        }, [setclasslocations, setstorelocations]
    );
    return (
        <SearchBar>
            <header id="RecipeLogo">
                {props.p === "store"? "StoreList":"OneDayClass"}
            </header>
            <section id="format">
                <select id="category" 
                onChange={(e)=>{
                    //console.log(e.currentTarget.value);
                    setcategory(e.currentTarget.value);
                }}>
                    <option value="all">지역선택</option>
                    <option value="서울">서울</option>
                    <option value="경기">경기</option>
                    <option value="경산">경산</option>
                    <option value="대전">대전</option>
                    <option value="대구">대구</option>
                    <option value="부산">부산</option>
                    <option value="익산">익산</option>
                </select>
                <article id="input_area">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" id="input" placeholder="매장명을 입력해보세요"
                    onChange={(e) => {
                        //console.log(e.currentTarget.value);
                        settextvalue(e.currentTarget.value);
                    }}/>
                </article>
                <article id="submit_area">
                    <input type="submit" value="Search" id="submit"
                    onClick={async (e)=>{
                        e.preventDefault();
                        if(props.p === "class"){
                            const location = getclasslocations;
                            const local = searchLocationOneDayClass(getcategory,gettextvalue,location);
                            setclasslocations(local);
                            console.log(local);
                        }
                        else{
                            const location = getstorelocations;
                            const local = searchLocationStore(getcategory,gettextvalue,location);
                            setstorelocations(local);
                            console.log(local);
                        }
                    }}/>
                </article>
            </section>
        </SearchBar>
    )
}

export default LocationSearch;