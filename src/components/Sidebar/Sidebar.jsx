import React from "react";
import SidebarItem from "../SidebarItem/SidebarItem.jsx";
import Skeleton from "../Skeleton.jsx";
import { useState } from "react";
import * as S from "./StyledSidebar";
import { StyledSidebarItem } from "../SidebarItem/StyledSidebarItem.jsx";

// import * as S from "./StyledSidebar";

function Sidebar({ cardImage }) {
  // всю логику мы прописываем до return
  const [visible, setVisible] = useState(false); //!мы импортируем функцию useState, которая принимает значение, и возвращает массив, в котором 0 элемент это значение, которое принимает функция, а 1 элемент это функция, которая принимает значение,
  console.log(useState(false));
  setTimeout(() => {
    //!это асинхронная функция
    setVisible(true); //!таймаут вызывает колбеком функцию, которая меняет значение компонента на true, при этом, эта функция работает асинхронно, что позволяет сначала отрисовать один компонент, а потом изменить значение переменной состояния и на основании этого отрисовать другой компонент.
  }, 3000);

  let componentShown = cardImage.map((element) => {//!объявляем переменную и засовываем в нее компонент SidebarItem, пропсом в короый передаем 
    console.log(element.id);
    return visible ? (
      <SidebarItem key={element.id} src={element.src} id={element.id} />
    ) : (
      <StyledSidebarItem  >
        <Skeleton
          className="sidebar__item"
          width={250}
          height={150}
          key={element.id}
          src={element.src}
        />
      </StyledSidebarItem>
    );
  });
  return (
    //после return у нас только разметка, то есть, то, что будет отображаться на странице
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Ermushin Roman</S.SidebarPersonalName>
        <S.SidebarIcon>
          <S.LogoutSvg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </S.LogoutSvg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>{componentShown}</S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
export default Sidebar;
