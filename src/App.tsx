import React from 'react';
import AppPage from './styled/App'
import './App.css';
import HeadMenu from './Component/Header/HeadMenu';
import Footer from './Component/Footer/Footer';
import AboutUs from './Component/Main/AboutUs';
import { Route, Routes } from 'react-router-dom';
import RecipeList from './Component/Main/RecipeList';
import RecipeInfo from './Component/Main/RecipeInfo';
import OneDayClassList from './Component/Main/OneDayClassList';
import OneDayClassInfo from './Component/Main/OneDayClassInfo';
import StoreList from './Component/Main/StoreList';

function App() {
  return (
    <AppPage>
      <HeadMenu></HeadMenu>
      <Routes>
        <Route path='/' element={
        <AboutUs></AboutUs>
        }></Route>

        <Route path='/Recipe' element={
        <RecipeList></RecipeList>
        }>
          <Route path='/Recipe/Info' element={
          <RecipeInfo></RecipeInfo>
          }></Route>
        </Route>

        <Route path='/OneDayClass' element={
        <OneDayClassList></OneDayClassList>
        }>
          <Route path='/OneDayClass/Info' element={
          <OneDayClassInfo></OneDayClassInfo>
          }></Route>
        </Route>

        <Route path='/StoreList' element={
        <StoreList></StoreList>
        }>
        </Route>
        
      </Routes>
      <Footer></Footer>
    </AppPage>
  );
}

export default App;
