import React from "react";
import { useState } from "react";
import MenuList from "../MenuList/MenuList";
import * as S from "./StyledNavMenu";

function NavMenu() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
    console.log(open);
  };

  let burger = open ? <MenuList /> : null;
  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={toggleOpen}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      <S.NavMenu>{burger}</S.NavMenu>
    </S.MainNav>
  );
}export default NavMenu;
