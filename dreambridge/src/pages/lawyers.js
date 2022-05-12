import LawyerPage from '../components/LawyerPage';
import Context from '../context/Context';
import Nav from '../components/Nav';
import React, { useContext} from 'react';

function Lawyers(){
    let { lawyers } = useContext(Context)

  return (
    <div className='App'>
      <Nav/>
      <LawyerPage lawyers={lawyers}/>
      </div>
  );
}

export default Lawyers