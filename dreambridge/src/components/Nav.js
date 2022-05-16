import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
function NavigationBar() {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
  <Container>
  <Navbar.Brand className='company-name'>DreamBridge</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Connect-with-a-lawyer">Connect with a lawyer</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link><Link to={`/inbox`}>Inbox</Link></Nav.Link>
      <Nav.Link href="/userprofile">
        UserProfile
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </>
    )
}

export default NavigationBar;