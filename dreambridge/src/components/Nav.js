import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

function NavBar() {
    return (
      <>
        <Navbar className="nav-bar">
        <div className="nav-bar-content-box">
          <h1>DreamBridge</h1>
          <Link to="/">Home</Link>
          <Link to="/Connect-with-a-lawyer">Connect with a Lawyer</Link>
          <Link to="/userprofile">Profile</Link>
          <Link to="/inbox">Inbox</Link>
        </div>
      </Navbar>
      <Outlet />
      </>
    )
}

export default NavBar;