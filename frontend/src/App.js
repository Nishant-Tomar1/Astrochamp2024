import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Events from './Components/Events';
import Team from './Components/Team';
import ContactUs from './Components/ContactUs';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';


function App() {
  return (
    <Router basename={"/"}>
      <Routefunction/>
    </Router>
  )
}


function Routefunction() {
  const location = useLocation();

  return (
    
    <AnimatePresence mode='wait'>
  
      <Navbar />
  
      <Routes location={location} key={location.key}>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/events" element={<Events/>}></Route>
          <Route path="/team" element={<Team/>}></Route>
          <Route path="/contactus" element={<ContactUs/>}></Route>
      </Routes> 

    </AnimatePresence>
  
  );
}

export default App;
