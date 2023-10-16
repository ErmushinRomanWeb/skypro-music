import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SidebarItem = styled.div`
  width: 250px;
  height: 150px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const SidebarLink = styled(NavLink)`
  width: 100%;
  height: 100%;
`;

export const StyledSidebarItem = styled.div`
  width: 250px;
  height: 150px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
