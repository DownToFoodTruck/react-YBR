import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink
} from './NavbarElements'


const Navbar = ({ toggle }) => {
  return (
	<>
		<Nav>
			<NavbarContainer>
				<NavLogo to="/">
					<img src='/Images/DTFT-Logo-Stacked-Blue.png' alt='Logo'/>
				</NavLogo>
				<MobileIcon onClick={toggle}>
					<FaBars />
				</MobileIcon>
				<NavMenu>
					<NavItem>
						<NavLinks to='/Welcome'>
							Home
						</NavLinks>

					</NavItem>

					<NavItem>
						<NavLinks to='/'>
							Link
						</NavLinks>

					</NavItem>

					<NavItem>
						<NavLinks to='/'>
							Link
						</NavLinks>

					</NavItem>
					
					<NavItem>
						<NavLinks to='/'>
							Link
						</NavLinks>
					
					</NavItem>

				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/Login">
						Sign In
					</NavBtnLink>
				</NavBtn>

			</NavbarContainer>
		</Nav>
	</>
  )
}

export default Navbar