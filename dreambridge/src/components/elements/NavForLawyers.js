import { Link } from "react-router-dom";
import Context from '../../context/Context';
import React from 'react';
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";

function LawyerNav() {
  const context = React.useContext(Context)

    return (
      <>
      <div className='navi hero-content'>
              <h1 className='company-name dreamsbridge'>DreamsBridge</h1>
              <div className="nav-items">
                <div>
                  <ButtonGroup>
                    <Button className="nav-btn" color="light">
                      <Link to={"/"} className="hover-link home-btn">Home</Link>
                    </Button>
                    <Button color="light" className="nav-btn">
                      <Link to={`/Connect-with-a-client`}className="hover-link">Connect with a Client</Link>
                    </Button>
            {context.isLoggedIn && <>
            <Button className="nav-btn">
              <Link to={`/inbox`}className="hover-link">Inbox</Link></Button>
              <Button className="nav-btn">
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

export default LawyerNav;