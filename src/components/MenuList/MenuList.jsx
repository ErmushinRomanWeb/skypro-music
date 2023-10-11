import React from "react";
import * as S from "./StyledMenuList";

function MenuList() {
  return (
    <S.MenuList>
      <S.MenuItem>
        <S.MenuLink to="/#">Главное</S.MenuLink>{/*уже испльзую в стилевой компоненте NavLink!!! */}
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink to="/#" >Мой плейлист</S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink to="/#" >Войти</S.MenuLink>
      </S.MenuItem>
    </S.MenuList>
  );
}

export default MenuList;