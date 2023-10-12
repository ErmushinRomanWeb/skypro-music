import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import NotFound from "./pages/NotFoundPage/NotFound";
import Category from "./pages/category/Category";



function App({ state }) {
  //! по сути, мы просто работаем со значением переменной, которая неявно объявляется при получении параметра.
  console.log(NotFound);
  return (
    <Routes>
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/registration-page" element={<RegistrationPage />} />
      <Route path="/" element={<MainPage cardImage={state.cardImage} />} />
      <Route path="category" element={<Category/>}/>
      {/*так, как при передаче аргумента в компонент 
    этот компонент формирует объект, ключем которого становится название заданного атрибута, а значением - значение атрибута, то можно сделать вывод, что когда мы приняли этот объект в объявлении компонента, то мы получили переменную, со значением, то есть, мы работаем со значением, и далее, когда мы будем внутри компонента вызывать дочерний компонент, то мы так же задаем ему атрибут, имя которого становится ключем, по которому мы достаем пропс*/}
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}
//!то есть логика в том, что мы просто заменяем все теги на компоненты, кторые заранее создали и отстилизовали
export default App;
