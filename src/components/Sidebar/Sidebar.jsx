import React from "react";
import SidebarItem from "../SidebarItem/SidebarItem.jsx";
import Skeleton from "../Skeleton.jsx";
import { useState } from "react";
import * as S from "./StyledSidebar";
import { StyledSidebarItem } from "../SidebarItem/StyledSidebarItem.jsx";

// import * as S from "./StyledSidebar";

function Sidebar({ cardImage }) {
  // всю логику мы прописываем до return
  const [visible, setVisible] = useState(false); //функция меняет локальный state компонента
  setTimeout(() => {
    //!это асинхронная функция
    setVisible(true); //!Код не останавливается когда начинает считаться таймер
  }, 3000);

  let componentShown = cardImage.map((element) => {
    return visible ? (
      <SidebarItem key={element.id} src={element.src} />
    ) : (
      <StyledSidebarItem>
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
