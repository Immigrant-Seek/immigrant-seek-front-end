import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import React, { useContext} from 'react';
import LawyerPage from './components/LawyerPage';
import Context from './context/Context';

function App() {
  let { lawyers } = useContext(Context)

  return (
    <div className='App'>
      <Navbar className="nav-bar">
        <div className="nav-bar-content-box">
          <h1>DreamBridge</h1>
          <p><a href="#">Home</a></p>
          <p><a href="#">Connect with a Lawyer</a></p>
          <p><a href="#">User profile</a></p>
          <button type="button">Inbox</button>
        </div>
      </Navbar>
      <LawyerPage lawyers={lawyers}/>
      </div>
  );
}

export default App;
