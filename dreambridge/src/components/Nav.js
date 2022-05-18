import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Context from '../context/Context';
import React from 'react';
function NavigationBar() {
  const context = React.useContext(Context)
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
          <Container>
              <Navbar.Brand className='company-name'>DreamBridge</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link><Link to={"/"}>Home</Link></Nav.Link>
                <Nav.Link><Link to={`/Connect-with-a-lawyer`}>Connect with a lawyer</Link></Nav.Link>
              </Nav>
            {context.isLoggedIn && <Nav>
              <Nav.Link><Link to={`/inbox`}>Inbox</Link></Nav.Link>
              <Nav.Link>
              <Link to={`/userprofile`}>My Profile</Link>
              </Nav.Link>
            </Nav>}
            </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
    )
}

export default NavigationBar;