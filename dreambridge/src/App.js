import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Lawyers from './pages/lawyers';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route exact path='/Connect-with-a-lawyer' element={<Lawyers />}/>
        {/* <Route exact path='/userprofile' element={UserProfile />}/> */}
      </Routes>
    </Router>
  )
}

export default App;