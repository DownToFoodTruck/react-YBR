import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.nav`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  width: 100%;
  height: 70px;
  background: #f3c613;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  transition: top 0.3s ease-in-out;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #004aad;
  font-size: 1.8rem;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #004aad;
  width: 100%;
  justify-content: center;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-decoration: none;
  color: #004aad;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: #fff;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  border-radius: 4px;
  background: #004aad;
  white-space: nowrap;
  padding: 10px 20px;
  color: #fff333;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #fff;
    color: #010606;
  }
`;