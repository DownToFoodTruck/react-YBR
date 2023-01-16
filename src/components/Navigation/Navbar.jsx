import React from 'react';
import { FaBars } from 'react-icons/fa';
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
} from './NavbarElements';
import DTFT from '../../Images/Logo-Blue-2500x1500.png';
import Email from '../../Images/email-icon.png';
import Insta from '../../Images/instagram-icon.png';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={DTFT} alt="Logo" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/LoginSplash">Sign Up</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/">Link</NavLinks>
            </NavItem>

            <NavItem>
              <a href="https://www.instagram.com/downtofoodtruck" target="_blank">
                <img className="nav-img" src={Insta} alt="Instagram" />
              </a>

              <a href="mailto:hey@downtofoodtruck.com" target="_blank">
                <img className="nav-img" src={Email} alt="Email" />
              </a>
            </NavItem>
          </NavMenu>
          <NavBtn>{/* <NavBtnLink to="/LoginSplash">Sign In</NavBtnLink> */}</NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
