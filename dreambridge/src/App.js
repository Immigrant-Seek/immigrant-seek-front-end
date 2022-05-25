import './App.css';
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lawyers from './views/lawyers';
import Login from './views/login';
import LawyerProfile from './components/elements/LawyerProfile';
import SignUp from './components/elements/SignUp';
import Inbox from './components/elements/Inbox';
import UserProfile from './views/userprofile';
import ScrollReveal from '../src/components/utils/ScrollReveal';
// Layouts
import LayoutDefault from '../src/components/layouts/LayoutDefault';

// Views 
import Home from './views/Home';

// function App() {
//   return (

//     <Router>
//       <Routes>
//         <Route exact path='/' component={Home} layout={LayoutDefault} />
//         <Route exact path='/signup' element={<SignUp/>}/>
//         <Route exact path='/inbox' element={<Inbox/>}/>
//         <Route exact path='/Connect-with-a-lawyer' element={<Lawyers />}/>
//         <Route path='Connect-with-a-lawyer/lawyers/:id' element={<LawyerProfile />}/>
//         <Route exact path='/userprofile' element={<UserProfile />}/>
//       </Routes>
//     </Router>
//   )
// }

// export default App;

import React, { useRef } from 'react';






const App = () => {

  const childRef = useRef();



  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} layout={<LayoutDefault />} />
            <Route exact path='/signup' element={<SignUp />} />
            <Route exact path = '/login' element={<Login />} />
            <Route exact path='/inbox' element={<Inbox />} />
            <Route exact path='/Connect-with-a-lawyer' element={<Lawyers />} />
            <Route path='Connect-with-a-lawyer/lawyers/:id' element={<LawyerProfile />} />
            <Route exact path='/userprofile' element={<UserProfile />} />
          </Routes>
        </Router>
      )} />
  );
}

export default App;