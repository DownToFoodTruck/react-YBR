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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import DTFT from "../../Images/Logo-Blue-2500x1500.png";

const Navbar = ({ toggle }) => {
  return (
	<>
		<Nav>
			<NavbarContainer>
				<NavLogo to="/">
					<img src={DTFT} alt='Logo'/>
				</NavLogo>
				<MobileIcon onClick={toggle}>
					<FaBars />
				</MobileIcon>
				<NavMenu>
					<NavItem>
						<NavLinks to='/LoginSplash'>
							Sign Up
						</NavLinks>

					</NavItem>

            <NavItem>
              <NavLinks to="/">Link</NavLinks>
            </NavItem>

            <NavItem>
            <a href="https://www.instagram.com/downtofoodtruck"
                target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="nav-img"/>
            </a>
            <a href="mailto:hey@downtofoodtruck.com"
                target="_blank">
              <FontAwesomeIcon icon={faEnvelope} className="nav-img"/>
            </a>
            </NavItem>
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
