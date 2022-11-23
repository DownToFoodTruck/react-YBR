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
import DTFT from "../../Images/Logo-Blue-2500x1500.png";
import Email from "../../Images/email-icon.png";
import Insta from "../../Images/instagram-icon.png";

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
						<NavLinks to='/'>
							Link
						</NavLinks>

					</NavItem>

            <NavItem>
              <NavLinks to="/">Link</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to={{ pathname: "https://www.instagram.com/downtofoodtruck" }}
                target="_blank"
              >
                <img className="nav-img" src={Insta} alt="Instagram" />
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to={{ pathname: "mailto:hey@downtofoodtruck.com" }}
                target="_blank"
              >
                <img className="nav-img" src={Email} alt="Email" />
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/LoginSplash">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
