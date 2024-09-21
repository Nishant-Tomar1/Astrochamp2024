import React from 'react';  
import Styles from "../Styles/Navbar.module.css"
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowUp } from "react-icons/fa";
import logo from "../Components/logos/NakshatraLogo.png";



export default function Navbar() {
  document.addEventListener('click', () => {
    const toggler = document.getElementsByClassName('closer');
    toggler[0].classList.remove('show');
  })
  
  return (
<>
  <motion.nav className="navbar fixed-top navbar-expand-lg navbar-dark  bg-transparent">
  { <div   className={`${Styles.Stickybtn}`} onClick={()=> window.scrollTo(0,0)}>  <button > <FaArrowUp /> </button></div> }
    <div className="container-fluid " >
    <Link className="d-flex navbar-brand head fs-2 fw-bold px-2 ps-md-4 Head " to =""> <img style={{width:"1.4em",height:"1.4em",margin:"1px 4px 2px 0px",borderRadius:"50%"}} src={logo} alt="logo"/>AstroChamp</Link>

    <button className={`closer1 navbar-toggler ${Styles.Toggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="closer collapse navbar-collapse text-center bg-transparent" id="navbarSupportedContent" >
      
      <div className="navbar-nav ms-auto mb-2 mb-lg-0 px-2 gap-md-4 gap-3 pt-md-2">
        <div className="pt-3 pt-lg-0">
          <Link className = {Styles.NavlinkListElement} aria-current="page" to ="/" onClick={()=> window.scrollTo(0,0)}>Home</Link>
        </div>
        <div >
          <Link className={Styles.NavlinkListElement} to ="/events" onClick={()=> window.scrollTo(0,0)}>Events</Link>
        </div>
        <div className="nav-item">
          <Link className={Styles.NavlinkListElement} to ="/team" onClick={()=> window.scrollTo(0,0)}>Our Team</Link>
        </div>
        <div className="nav-item">
          <Link className={Styles.NavlinkListElement} to ="/contactus" onClick={()=> window.scrollTo(0,0)}>Contact Us</Link>
        </div>
        <div className="nav-item">
          <Link className={Styles.NavlinkListElement}  to="https://drive.google.com/file/d/1bxzvGeCrCnR8PXc7JcnzU9KhTHD8Jkot/view?usp=sharing" target='blank' >Brochure</Link>
        </div> 
        <div className="nav-item">
          <Link className={Styles.NavlinkListElement}  to="https://drive.google.com/file/d/1lEH1tKpKGFQh4mzREds1cXbc0xggmW5t/view?usp=sharing" target='blank' >Rulebook</Link>
        </div> 
      </div>
    </div>
  </div>
  
</motion.nav>
</>

  )
}