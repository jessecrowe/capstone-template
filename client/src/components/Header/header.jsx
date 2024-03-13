import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
	return (

		<Navbar style={{ backgroundColor: "lightgray" }}  >
		<Container>

			<Navbar.Brand href="#home">
				That's Another Story
			</Navbar.Brand>
			<Nav className="justify-content-end">
				<Nav.Link href="#CommunityPage" >Public Bookshelf</Nav.Link>
				<Nav.Link  href="#login">Login</Nav.Link>
			</Nav>
			


			
		</Container>
		</Navbar>



	)
}



export default Header;
