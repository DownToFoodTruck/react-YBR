import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import DTFT from "../../Images/DTFT-Logo-Stacked.png";
// import { FaInstagram } from "react-icons/fa";
// import { FaMailBulk } from "react-icons/fa";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={DTFT} alt='Logo' />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {/* <NavItem>
              <NavLinks to='/LoginSplash'>
                Sign Up
              </NavLinks>

            </NavItem> */}
          </NavMenu>
          <NavBtn>
            {/* <NavBtnLink to="/LoginSplash">Sign In</NavBtnLink> */}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;