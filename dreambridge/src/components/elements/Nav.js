// import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Context from '../../context/Context';
import React from 'react';
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
function NavigationBar() {
  const context = React.useContext(Context)

    return (
      <>
      <div className='navi hero-content'>
              <h1 className='company-name dreamsbridge'>DreamsBridge</h1>
              <div className="nav-items">
                <div>
                  <ButtonGroup>
                    <Button className="home-btn" color="light">
                      <Link to={"/"} className="hover-link">Home</Link>
                    </Button>
                    <Button color="light">
                      <Link to={`/Connect-with-a-lawyer`}className="hover-link">Connect with a lawyer</Link>
                    </Button>
            {context.isLoggedIn && <>
            <Button>
              <Link to={`/inbox`}className="hover-link">Inbox</Link></Button>
              <Button>
              <Link to={`/userprofile`}className="hover-link">My Profile</Link></Button>
              </>
            }
            </ButtonGroup>
            </div>
              </div>
      </div>
    </>
    )
}

export default NavigationBar;