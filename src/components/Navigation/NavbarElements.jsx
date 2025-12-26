import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Nav = styled.nav`
  background: #004aad;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

}
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 1.5rem;
  height: 100%;
`;

export const NavLogo = styled(LinkRouter)`
  color: #004aad;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 1.8rem;
    cursor: pointer;
    color: #004aad;
    &:hover {
      color: #fff;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
`;

export const NavLinks = styled(LinkRouter)`
  color: #004aad;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 4px;
  background: #004aad;
  white-space: nowrap;
  padding: 5px 10px;
  color: yellow;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: yellow;
    animation-name: lighten-blue;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }
`;

export default Nav;
