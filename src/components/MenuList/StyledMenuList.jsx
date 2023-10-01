import styled from "styled-components";

// Объявляем стилевые компоненты с префиксом S

export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
  list-style: none;
`;

export const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;

export const MenuLink = styled.a`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;

  &:hover {
    /* Стили при наведении курсора */
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
`;