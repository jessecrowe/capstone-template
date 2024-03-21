import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css"

function Header() {
	return (

		<Navbar style={{ backgroundColor: "lightgray" }}  >
		<Container>

			<Navbar.Brand className="nav-brand" as={Link} to="/">
				That's Another Story
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="top-nav" />
			<Navbar.Collapse id="top-nav"></Navbar.Collapse>
			<Nav className="ms-auto nav-links">
				<Nav.Link as={Link} to="/communitypage" >Public Bookshelf</Nav.Link>
				<Nav.Link as={Link} to="/" >Login</Nav.Link>
				<Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
			</Nav>
			


			
		</Container>
		</Navbar>



	)
}



export default Header;
