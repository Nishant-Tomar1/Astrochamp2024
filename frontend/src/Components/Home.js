import React from 'react';
import Styles from '../Styles/Home.module.css';
import { FaQuestion, FaSearch,FaRupeeSign } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { TfiThought } from "react-icons/tfi";
import { TbMathIntegrals } from "react-icons/tb";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdOutlineCamera } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { IoTelescopeOutline } from "react-icons/io5";
// import webnd from "../Components/logos/webd.png";
import { MdOutlineEventAvailable } from "react-icons/md";
import abhivyakti from "../Components/logos/abhivyakti.png"
import panacea from "../Components/logos/panacea.png";
import quizsoc from "../Components/logos/quizsoc.png";
import neuro from "../Components/logos/neuro.png"
import risc from "../Components/logos/risc.png"
import febs from "../Components/logos/febs.png"
const images = require.context("../Components/glimpses",true);
const glimpses = images.keys().map(image => images(image));

function Home() {
  console.log(glimpses);
  

  const variant = {
    entry : {
        opacity: [0,1], 
        transition:{
            duration:0.125,
            times:[0,1],
        }
    },
    exit : {
        opacity: [1,0], 
        transition:{
            duration:0.125,
            times:[0,1],
        }
    },
}
  return (
    <>
    <motion.div className={Styles.homediv} variants={variant} animate='entry' exit='exit'>

        <div className={Styles.homecontentDiv}> 

          <div className={Styles.optImage}> </div>
          <div className={Styles.homeContentText} style={{fontWeight : '650'}}> Unveiling the COSMOS <br></br>At <br ></br>IIT Bhubaneswar</div>
        </div>

        <div className={Styles.about} >

          <span className={Styles.abouthead}>ABOUT</span> <span className={Styles.aboutheadLarge}>ABOUT Astro_Champ 2024</span><br></br>
          
            <div className={Styles.aboutContent}>
                Welcome to ASTROCHAMP 2024, a celestial extravaganza set to illuminate the skies at Indian Institute of Technology, Bhubaneswar on <span style={{color:"goldenrod"}}> September 27-29, 2024 </span>. Immerse yourself in the wonders of the universe as we bring together astronomers, space enthusiasts, and inquisitive minds for two days of cosmic exploration. <br></br><br></br>

                ASTROCHAMP is not just an event, it's a gateway to the cosmos. Join us in discovering the mysteries of the universe through competitions mesmerizing stargazing sessions. Whether you're a seasoned stargazer or a budding astronomer, this festival offers a unique opportunity to connect with the celestial wonders. <br></br><br></br>

                Mark your calendars for a weekend filled with astronomical delight, where curiosity knows no bounds, and the cosmos unfolds its secrets. ASTROCHAMP 2024 invites you to be part of this extraordinary journey, where the skies above and the knowledge within converge for an unforgettable experience. 
              
            </div> 

          </div>

          {/* Events */}

          <div><span className={Styles.abouthead2}>AstroEvents</span></div>
<section className="text-white body-font">

  <div className="container px-4 py-3  mx-auto flex flex-wrap">


    <div className="flex relative pt-10 pb-10 md:pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-white pointer-events-none "></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-8 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm border-1">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-black text-white rounded-full inline-flex items-center justify-center border-2">
          <FaQuestion style={{fontSize: '50px'}}/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-purple-600 mb-1 text-4xl md:text-4xl">Space Quiz</h2>
          <p className="leading-relaxed text-lg lg:text-xl">A two-round Quiz competition based on astronomy, aerospace and astrophysics that will be conducted in collaboration with the Quiz Society of IIT Bhubaneswar.</p>
        </div>

      </div>
    </div>

    
    <div className="flex relative pb-10 md:pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-white pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm border-1">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-black text-white rounded-full inline-flex items-center justify-center border-2">
          <FaSearch style={{fontSize: '45px'}}/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-pink-700  mb-1 text-4xl md:text-4xl">Asteroid Venture</h2>
          <p className="leading-relaxed text-lg lg:text-xl">An exciting case study based competition where a problem statement related to asteroid mining will be given and you have to solve it in a limited time period given to you.</p>
        </div>
      </div>
    </div>


    <div className="flex relative pb-10 md:pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-white pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm border-1">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-black text-white rounded-full inline-flex items-center justify-center border-2">
          <IoMdRocket  style={{fontSize: '60px'}}/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-purple-600 mb-1 text-4xl md:text-4xl">Blast Off</h2>
          <p className="leading-relaxed text-lg lg:text-xl">A water bottle rocket competition in which you have to make your own water bottle rocket and then launch it using the launch pads provided by the organizers.</p>
        </div>
      </div>
    </div>


    <div className="flex relative pb-10 md:pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-white pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm border-1">4</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-black text-white rounded-full inline-flex items-center justify-center border-2">
          <TfiThought style={{fontSize: '50px'}}/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-pink-700 mb-1 text-4xl md:text-4xl">Starborn Sagas</h2>
          <p className="leading-relaxed text-lg lg:text-xl">A competition where you can express your creativity and thoughts in form of words! Give the beginning of an exciting story, your job is to complete it int the most amazing way possible ! </p>
        </div>
      </div>
    </div>

    <div className="flex relative pb-10 md:pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-white pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm border-1">5</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-black text-white rounded-full inline-flex items-center justify-center border-2">
          <MdOutlineCamera  style={{fontSize: '60px'}}/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-purple-600 mb-1 text-4xl md:text-4xl">Astro Photography</h2>
          <p className="leading-relaxed text-lg lg:text-xl">A Photography competition for the photography enthusiasts to showcase there skills by clicking eye catching or rare photographs of the night sky.</p>
        </div>
      </div>
    </div>

    <div className="flex relative pb-10 md:pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-white pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm border-1">6</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-black text-white rounded-full inline-flex items-center justify-center border-2">
          <FaLaptopCode style={{fontSize: '50px'}}/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-pink-700 mb-1 text-4xl md:text-4xl">Competitive Programming</h2>
          <p className="leading-relaxed text-lg lg:text-xl">A coding competition where participants solve algorithmic problems within a limited time. It tests speed, logic, and efficiency, offering valuable experience for real-world tech challenges.</p>
        </div>
      </div>
    </div>

    <div className="flex relative pb-10 md:pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-white pointer-events-none "></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-8 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm border-1">7</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-black text-white rounded-full inline-flex items-center justify-center border-2">
          <TbMathIntegrals style={{fontSize: '50px'}} />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-purple-600 mb-1 text-4xl md:text-4xl">Matho-Stellar</h2>
          <p className="leading-relaxed text-lg lg:text-xl">An online quiz type of event based on Non-Routine mathematics. It is a team event. Questions in the online quiz will be based on : Geometry , Algebra , Calculus , Number theory. </p>
          
        </div>

      </div>
    </div>

    <div className="flex relative pb-10 md:pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-white pointer-events-none "></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-8 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm border-1">8</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-black text-white rounded-full inline-flex items-center justify-center border-2">
          <IoTelescopeOutline  style={{fontSize: '60px'}}/>
         
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-pink-700 mb-1 text-4xl md:text-4xl">Stargazing</h2>
          <p className="leading-relaxed text-lg lg:text-xl"> An open event organized by the Team NAKSHATRA where all the students and faculty of IIT Bhubaneshwar are invited to see the beautiful universe through our telescopes.</p>
          
        </div>

      </div>
    </div>

    <div className="flex relative pb-10 md:pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-white pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm border-1">9</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-black text-white rounded-full inline-flex items-center justify-center border-2">
          <MdOutlineEventAvailable style={{fontSize: '50px'}} />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-purple-600 mb-1 text-4xl md:text-4xl"> Exhibition</h2>
          <p className="leading-relaxed text-lg lg:text-xl">
          The Robotics and Intelligent Systems Club (RISC), in collaboration with Nakshatra IITBBS, is gearing up to present their ISRO Rover project at Nakshatra's upcoming AstroChamp event.
</p>
<div >
      <Link to="/events" style={{textDecoration:'none',color:'orange',fontSize:"1.2rem"}} onClick={()=>  window.scrollTo(0,0)}>Know More . . .  </Link>
    </div>
        </div>
      </div>
    </div>

  </div>

  <div className={Styles.prizepooldiv}>
    <div style={{color:"goldenrod"}}>Prize Pool :</div>
    <div > <FaRupeeSign style={{fontSize: "90%"}}/>25 K+</div>
  </div>

  {/* glimpses */}
  <div>
    <div className="flex flex-col text-center w-full mb-4">
        <h1 className="text-xxl font-bold title-font mb-3 tracking-wide md:text-5xl" style={{color:"goldenrod"}}> <hr />Glimpses of Previous edition</h1>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 mx-4 lg:px-12">
    {
      glimpses.map((image,index) => 
      
        <div key={index}>
          <img className="h-auto max-w-full rounded-md" src={image} alt="img"/>
        </div>
      
      )
    }
      
    </div>
  </div>


  <div className="container pb-4 pt-5 mx-auto">
    <div className="flex flex-col text-center w-full mb-4">
      <h1 className="text-xxl font-bold title-font mb-3 tracking-wide md:text-5xl" style={{color:"goldenrod"}}> <hr />Collaborations</h1>
    </div>


    <div className="flex flex-wrap justify-center items-center gap-5 p-2 ">
      {/* <div className={Styles.logos} style={{borderRadius:"50% !important"}}><img src={webnd} alt="" /><p>WebnD Society</p></div> */}
      <div className={Styles.logos}><img src={panacea} alt="" />Panacea</div>
      <div className={Styles.logos}><img src={abhivyakti} alt="" />अभिव्यक्ति</div>
      <div className={Styles.logos}><img src={quizsoc} alt="" />Quiz Society</div>
      <div className={Styles.logos}><img src={neuro} alt="" />NeuroMancers</div>
      <div className={Styles.logos}><img src={risc} alt="" />RISC</div>
      <div className={Styles.logos}><img src={febs} alt="" />FEBS</div> 
    </div>
    
  </div>
  

</section> 
  


    {/* Footer */}
    <div className={Styles.FooterDiv} style={{color:'gray !important'}}>

      <div className='mb-1 font-xs md:text-2xl text-lg '>  AstroChamp | Nakshatra, IITBBS </div> 
      <div className={Styles.FooterFont}> Dive into the cosmic adventure at AstroChamp 2024! Explore the universe through quizzes, art, science, and more. <br ></br> Join us in this celestial celebration!<hr /></div>
      
      <div className={Styles.FooterEnd}> 
        <div>© Copyright 2024 | All rights Reserved </div>
        <div> Designed and developed by <a href="https://www.github.com/Nishant-Tomar1" target='#' style={{textDecoration:'none',color:'purple'}}>Nishant Tomar</a> (team AstroChamp) </div>
      </div>

    </div>


    </motion.div>

    
    </>
  )
}

export default Home;
