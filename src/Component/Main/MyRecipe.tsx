import { useState } from "react";
import MyRecipePage from "../../styled/MyRecipe";
import { Ingredients, Recipe } from "../Fn/Interface/Recipe";
import setAutoWordText from "../Fn/SetAutoWordText";
import inputRecipeKeyword from "../Fn/InputRecipe_Keyword copy";
import CustomIngredients from "./CustomIngredients";
import { isSuccess } from "../Fn/Interface/isLogin";



const MyRecipe = () => {
    let [getTheumnale, setThemnale] = useState<string>('');
    let [getIngredients, setIngredients] = useState<Ingredients[]>([]);

    

    return(
        <MyRecipePage onSubmit={(e) => {
            e.preventDefault();
            let from_data = new FormData(e.currentTarget);
            let new_data: Recipe = {
                ID: "",
                Image: from_data.get('myRecipeTheumnale') as string,
                Name: from_data.get('myRecipeEngName') as string,
                Kor_name: from_data.get('myRecipeName') as string,
                Taste: from_data.get('taste') as string,
                Ingredients: getIngredients as Ingredients[],
                Method: from_data.get('recipe') as string,
                Garnish: from_data.get('garnish') as string,
                Histoy: from_data.get('history') as string
            }
            console.log(new_data);
            // 여기에 데이터베이스에 추가하는 기능
                fetch('http://localhost:3001/Import_recipe', {
                  method : "post",
                  headers : {"Content-type": "application/json",
                  Accept: "application/json",},
                  body : JSON.stringify(
                    new_data
                  )
                }).then(res =>{ 
                  console.log(res.status);  // HTTP 상태 코드를 출력합니다.
                  console.log(res.statusText);  // HTTP 상태 메시지를 출력합니다.
                  console.log(res)
                  return res.json()
                }).then((result : isSuccess ) => {
                    console.log(result.isSuccess) 
                  if(result.isSuccess === "True"){

                  }
                }).catch(error => {console.log("에러 내용 : " +error)})
                
              
        }}>
            <article className="NameSet">
                <span className="myRecipeName">국문 제목</span>
                <input type="text" name="myRecipeName" id="myRecipeNameInput" />
                <span className="myRecipeName">영문 제목</span>
                <input type="text" name="myRecipeEngName" id="myRecipeEngNameInput" />
            </article>
            <article className="NameSet">
                <span className="myRecipeName">사진</span>
                <input type="text" name="myRecipeTheumnale" id="myRecipeTheumnaleInput" 
                onChange={(e) => {
                    setThemnale(e.currentTarget.value);
                }}/>
            </article>
            <section className="inviewContainer">
                <section className="inputs">
                    <section className="taste">
                        <h2>맛</h2>
                        <textarea name="taste" className="tasteTextarea"></textarea>
                    </section>
                    <section className="ingredients">
                        <h2>재료</h2>
                        <button className="addIngredientsBtn" onClick={()=>
                            setIngredients(v => {v.push({Name:"",Optional:false,Volume:""}); return([...v])})
                        }>+</button>
                        {getIngredients.map((data, i) => 
                            <CustomIngredients key={data.Name+i}
                            setter={setIngredients}
                            index={i}
                            data={data}></CustomIngredients> )}
                    </section>
                    <section className="recipe">
                        <h2>레시피</h2>
                        <textarea name="recipe" className="recipeTextarea"></textarea>
                    </section>
                    <section className="garnish">
                        <h2>가니쉬</h2>
                        <textarea name="garnish" className="garnishTextarea"></textarea>
                    </section>
                    <section className="history">
                        <h2>설명</h2>
                        <textarea name="history" className="historyTextarea"></textarea>
                    </section>
                    <nav className="submitNav">
                        <input type="submit" value="등록" className="submitBtn"/>
                    </nav>
                </section>
                <section className="viewrs">
                    <img src={getTheumnale} alt="사진이 없습니다." width={720} height={720} />
                </section>
            </section>
        </MyRecipePage>
    );
}

export default MyRecipe;