import React from "react";
import * as S from "./StyledMenuList";

function MenuList() {
  let page = window.location.href;
  console.log(page);
  let buttonName = page === "http://localhost:3000/" ? "Выйти" : "ЭТО БАГ!!!";
  return (
    <S.MenuList>
      <S.MenuItem >
        <S.MenuLink to="/">Главное</S.MenuLink>
        {/*уже испльзую в стилевой компоненте NavLink!!! */}
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink to="/my-play-list">Мой плейлист</S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink to="/login-page">{buttonName}</S.MenuLink>
      </S.MenuItem>
    </S.MenuList>
  );
}

export default MenuList;
