import React from "react";
import * as S from "./StyledSidebarItem"

function SidebarItem({ src, id }) {
  //Создаем функциональный компонент,и аргументом я вставляю свойство этого компонента, которое передается из родительского компонента, и используется для передачи данных между компонентами
  return (
    <S.SidebarItem>
      <S.SidebarLink to={`/category/${id}`}>
        <img className="sidebar__img" src={src} alt="day's playlist" />
      </S.SidebarLink>
    </S.SidebarItem>
  );
}

export default SidebarItem;
