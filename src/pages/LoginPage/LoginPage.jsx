import React from 'react';
import * as S from './StyledLoginPage'
import { NavLink } from 'react-router-dom';

// Define your styled component

const LoginPage = () => {
  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.FormLogin>
            <a href="../">
              <S.Logo>
                <img src="../img/logo_modal.png" alt="logo" />
              </S.Logo>
            </a>
            <S.Input className="login" type="text" name="login" placeholder="Почта" />
            <S.Input className="password" type="password" name="password" placeholder="Пароль" />
            <S.ButtonEnter>
              <NavLink to={"/"}>Войти</NavLink>
            </S.ButtonEnter>
            <S.ButtonSignup>
              <NavLink to={"/registration-page"}>Зарегистрироваться</NavLink>
            </S.ButtonSignup>
          </S.FormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
};

export default LoginPage;
