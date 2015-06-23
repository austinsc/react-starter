import React from "react";
import { Link } from "react-router";
import { Navbar, Nav, NavItem, DropdownButton, MenuItem } from 'react-bootstrap'
import ReactLogo from "elements/ReactLogo";

export default class MainMenu extends React.Component {
	render() {
		const logo = (<ReactLogo type="svg" />);
		const navbarInstance = (
		  <Navbar brand='React-Bootstrap'>
		    <Nav>
		      <NavItem eventKey={1} href='#'>Link</NavItem>
		      <NavItem eventKey={2} href='#'>Link</NavItem>
		      <DropdownButton eventKey={3} title='Dropdown'>
		        <MenuItem eventKey='1'>Action</MenuItem>
		        <MenuItem eventKey='2'>Another action</MenuItem>
		        <MenuItem eventKey='3'>Something else here</MenuItem>
		        <MenuItem divider />
		        <MenuItem eventKey='4'>Separated link</MenuItem>
		      </DropdownButton>
		    </Nav>
		  </Navbar>
		);

		return navbarInstance;
	}
}

/*

			<div>
				<ReactLogo type="png" /> <ReactLogo type="jpg" />
				<h2>MainMenu:</h2>
				<ul>
					<li>The <Link to="home">home</Link> page.</li>
					<li>Do something on the <Link to="todo">todo page</Link>.</li>
					<li>Switch to <Link to="some-page">some page</Link>.</li>
					<li>Open the chat demo: <Link to="chat" params={{room: "home"}}>Chat</Link>.</li>
					<li>Open the page that shows <Link to="readme">README.md</Link>.</li>
				</ul>
			</div>
*/