import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import LoginPage from "./LoginPage/LoginPage";
import RegistrationPage from "./RegistrationPage/RegistrationPage";
import NotFound from "./NotFoundPage/NotFound";
import { Category } from "./category/Category"; //!точки в адресе мы используем для того, чтобы webpack и js понимали, искать файл в текущей директории или нужно подняться на папку выше, это элемент синтаксиса
import { ProtectRouting } from "../Functions/ProtectRouting";
import { MyPlayList } from "./MyPlayList/MyPlayList";

function AppRouting({ state }) {
  //!мы указываем {} для того, чтобы bale читал данный код, как часть js, далее
  //! по сути, мы просто работаем со значением переменной, которая неявно объявляется при получении параметра и в этой переменной лежит наш объект(данные, записанные в формате объекта, то есть ключ: значение)
  console.log(state.cardImage);
  return (
    <Routes>
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/registration-page" element={<RegistrationPage />} />
      <Route element={<ProtectRouting />}>
        <Route path="/" element={<MainPage cardImage={state.cardImage} />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/my-play-list" element={<MyPlayList />} />
      </Route>
      {/*так, как при передаче аргумента в компонент 
    этот компонент формирует объект, ключем которого становится название заданного атрибута, а значением - значение атрибута, то можно сделать вывод, что когда мы приняли этот объект в объявлении компонента, то мы получили переменную, со значением, то есть, мы работаем со значением, и далее, когда мы будем внутри компонента вызывать дочерний компонент, то мы так же задаем ему атрибут, имя которого становится ключем, по которому мы достаем пропс*/}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
//!то есть логика в том, что мы просто заменяем все теги на компоненты, кторые заранее создали и отстилизовали
export default AppRouting;
