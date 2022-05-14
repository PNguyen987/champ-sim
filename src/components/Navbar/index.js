import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/About" activeStyle>
			Home
		</NavLink>
		<NavLink to="/About" activeStyle>
			About
		</NavLink>
		<NavLink to="/Simulator" activeStyle>
			Simulator
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
