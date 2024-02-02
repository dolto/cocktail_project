import { useEffect, useState } from "react";
import { Ingredients } from "../Fn/Interface/Recipe";
import inputRecipeKeyword from "../Fn/InputRecipe_Keyword copy";
import setAutoWordText from "../Fn/SetAutoWordText";

interface customIngredientsProps{
    setter: React.Dispatch<React.SetStateAction<Ingredients[]>>,
    index: number,
    data: Ingredients
}
const CustomIngredients = (props: customIngredientsProps) => {
    let [getData, setData] = useState<Ingredients>(props.data);

    let [getautoword, setautoword] = useState<string[]>([]);
    // let [getcount, setcount] = useState<number>(-1);
    // let [getsize, setsize] = useState<number>(-1);

    // const autowordTab = (e: React.KeyboardEvent) => {
    //     const f = e.currentTarget as HTMLElement;
    //     if(e.key === "Tab"){
    //         if(getsize > getcount)
    //             setcount((count) => count+1);
    //         else
    //             setcount((count) => -1);
    //     }
    // }
    // useEffect(
    //     () => {
    //         console.log(getautoword.length);
    //         setsize(getautoword.length);
    // });
    const indexChange = () => {
        props.setter(v=>{v[props.index]=getData; return v;});
    }
    return(
        <article className="customIngredients">
            <span>재료명</span><input type="text" value={getData.Name} onBlur={(e)=>{
                if(getautoword.length > 2)
                    e.currentTarget.focus();
            }}
            name="Ingredient" id="IngredientInput" 
            onChange={async (e) => {
                console.log(e.currentTarget);
                if(e.currentTarget instanceof HTMLInputElement){
                    const v = e.currentTarget.value;
                    setData(d => {
                        d.Name=v; 
                        return {...d};
                    });
                    setautoword(await inputRecipeKeyword(v));
                    indexChange();
                }
            }}/>
            {getautoword.length >= 0?
            <section key={"Autoword"} className="AutoWord">
                {getautoword.map((str, i) => {
                        return (<nav className="word" key={i} onClick={()=>{
                            const value = [...getautoword][i];
                            setData(d => {
                                d.Name = value;
                                return {...d};
                            })
                            setautoword([]);
                            indexChange();
                        }}>
                            {setAutoWordText(str, getData.Name)}
                            </nav>);
                })}
            </section>
            :<></>}
            <span>수량</span><input type="text"
            name="Quantity" id="QuantityInput" value={getData.Volume}
            onChange={(e)=>{
                console.log(e.currentTarget);
                if(e.currentTarget instanceof HTMLInputElement){
                    const v = e.currentTarget.value;
                    setData(d => {
                        d.Volume=v; 
                        return {...d};
                    });
                    indexChange();
                }
                }}/>
            <span>옵셔널</span><input type="checkbox" checked={getData.Optional}
            name="Optional" id="OptionalInput" 
            onChange={(e)=>{
                setData(d => {
                    console.log(e.currentTarget);
                    if(e.currentTarget instanceof HTMLInputElement)
                        d.Optional=e.currentTarget.checked; 
                    return {...d};
                });
                indexChange();
                }}/>
            <button className="delete" onClick={() => {
                props.setter(v=>v.filter((_,i) => i!==props.index));
            }}>재료 제거</button>
        </article>
    )
}

export default CustomIngredients;