import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
            <NavLink to='/' activeStyle>
                Home
            </NavLink>
            <NavLink to='/cregistration' activeStyle>
                Register
            </NavLink>
            <NavLink to='/cusers' activeStyle>
                Users
            </NavLink>		
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
