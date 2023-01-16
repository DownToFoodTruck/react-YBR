import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Nav = styled.nav`
  background: #f3c613;
  height: 100vh;
  width: 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: 1;
  padding: 1rem 0;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkRouter)`
  color: #004aad;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
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
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 75% auto;
  padding: 0 5px;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

export const NavBtn = styled.nav`
  display: flex;
  justify-content: center;
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
