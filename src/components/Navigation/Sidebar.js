import React from 'react'
import { SidebarContainer, 
		Icon, 
		CloseIcon, 
		SidebarWrapper,
		SidebarMenu,
		SidebarLink,
		SideBtnWrap,
		SidebarRoute 
} from './SidebarElements'  

const Sidebar = ({ isOpen, toggle }) => {
  return (
	<SidebarContainer isOpen={isOpen} onClick={toggle}>
		<Icon onClick={toggle}>
			<CloseIcon />
		</Icon>
		<SidebarWrapper>
			<SidebarMenu>
			   
				<SidebarLink to="/"></SidebarLink>
				<SidebarLink to="/">Link</SidebarLink>
				<SidebarLink to="/">Instagram</SidebarLink>
				<SidebarLink to="/">Email</SidebarLink>
			</SidebarMenu>
			<SideBtnWrap>
				<SidebarRoute to="/Login">Sign Up</SidebarRoute>
			</SideBtnWrap>
		</SidebarWrapper>
	</SidebarContainer>
  )
}

export default Sidebar