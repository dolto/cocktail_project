import React from 'react';
import AppPage from './styled/App'
import HeadMenu from './Component/Header/HeadMenu';
import Footer from './Component/Footer/Footer';
import AboutUs from './Component/Main/AboutUs';
import { Route, Routes } from 'react-router-dom';
import RecipeList from './Component/Main/RecipeList';
import RecipeInfo from './Component/Main/RecipeInfo';
import OneDayClassList from './Component/Main/OneDayClassList';
import OneDayClassInfo from './Component/Main/OneDayClassInfo';
import StoreList from './Component/Main/StoreList';

//테스트를 위한 임포트
import recipeLoad from './Component/Fn/RecipeLoad';
import cocktailNameLoad from './Component/Fn/CocktailNameLoad';
import keywordLoad from './Component/Fn/KeywordLoad';
import inputRecipeCocktailName from './Component/Fn/InputRecipe_CocktailName';
import inputRecipeKeyword from './Component/Fn/InputRecipe_Keyword copy';
import searchRecipeCocktailName from './Component/Fn/SearchRecipe_Cocktail';
import searchRecipeKeyword from './Component/Fn/SearchRecipe_Keyword';
import RecipeSearch from './Component/Header/RecipeSearch';
import LocationSearch from './Component/Header/LocationSearch';
import oneDayClassLoad from './Component/Fn/OneDayClassLoad';
import { RecoilRoot } from 'recoil';
import StoreLoad from './Component/Fn/StoreLoad';
import searchLocationStore from './Component/Fn/SearchLocation_Store';

function App() {
  // recipeLoad().then(
  //   (res) => {
  //     searchRecipeCocktailName(res, "h");
  //     searchRecipeKeyword(res, ["Cognac", "Crème de Cacao (Brown)", "Fresh Cream"]);
  //   }
  // ); //레시피 로드 잘되는가
  //cocktailNameLoad(); //레시피 이름 로드 잘 되는가
  //keywordLoad() //레시피의 재료 목록을 로드 잘 하는가.
  //inputRecipeCocktailName('h'); //입력받은 문자열에서 칵테일 자동완성문이 잘 되는가
  //inputRecipeKeyword('h');
  // oneDayClassLoad().then((data)=>{
  //   console.log(data);
  // }) //원데이 클래스 로드 잘 되는가
  StoreLoad().then(
    (res) => {
      console.log(searchLocationStore("익산","",res));
    }
  )
  return (
    <AppPage>
      <HeadMenu></HeadMenu>
      <Routes>
        <Route path='/' element={
        <AboutUs></AboutUs>
        }></Route>
        <Route path='/Recipe' element={
          <>
            <RecipeSearch is_update={false}/>
            <RecipeList ></RecipeList>
          </>
        }></Route>
        <Route path='/Recipe/Info/:id' element={
          <>
            <RecipeInfo></RecipeInfo>
          </>
        }></Route>

        <Route path='/OneDayClass' element={
          <>
          <LocationSearch p={"class"}/>
          <OneDayClassList></OneDayClassList>
          </>
        }></Route>
        <Route path='/OneDayClass/Info' element={
          <>
          <LocationSearch p={"class"}/>
          <OneDayClassInfo/>
          </>
        }></Route>

        <Route path='/Store' element={
          <>
          <LocationSearch p={"store"}/>
          <StoreList></StoreList>
          </>
        }></Route>
        
      </Routes>
      <Footer></Footer>
    </AppPage>
  );
}

export default App;
