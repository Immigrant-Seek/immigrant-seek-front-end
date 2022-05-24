import LawyerPage from '../components/elements/LawyerPage';
import Context from '../context/Context';
import NavigationBar from '../components/elements/Nav'
import React, { useContext} from 'react';

function Lawyers(){
    let { lawyers } = useContext(Context)

  return (
    <div className='App'>
      <NavigationBar/>
      <LawyerPage lawyers={lawyers}/>
      </div>
  );
}

export default Lawyers