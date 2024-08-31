import {useState } from 'react';
import { FaInstagram ,FaLinkedinIn} from "react-icons/fa";
import Styles from '../Styles/Home.module.css';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
const images = require.context("../Components/Team",true);
const imageList = images.keys().map(image => images(image));



function Team() {

  const [showmorebtn, setShowmoreBtn] = useState(false);
  const control = useAnimationControls();
  const associates = ["Kunal", "Sudhanshu Jha", "Swastik Panda", "Spandan Satapathy","Jahnavi K", "Sreenadh Vajrala"];
  const ass2 = [ "Ramya Sri Vanjarapu", "Gagan Gupta","Shashank M N","Haripriya","Dumpala Venkata Mohith","Mhendra Reddy","Srinithya Reddy","Ayush Mittal","B Ganesh", "Hrishikesh Gathphane", "K Varshit", "Bibhu Biswajit Jena", "Sudha Godhani", "Sohan Bhattacharjya", "Ashis V"];

  const variant = {
    entry : {
        opacity: [0,1], 
        transition:{
            duration:0.2,
            times:[0,1],
        }
    },
    exit : {
        opacity: [1,0], 
        transition:{
            duration:0.2,
            times:[0,1],
        }
    },
}


const variant1 = {
  "entry" : {
    scaleY : 0,
    // opacity: 0,
  },

  "animate":{
    scaleY:1,
    // opacity: 1,
    transition:{
      duration:0.15,
      ease:"easeInOut"
    }
  },
  "exit" : {
    // opacity: 0,
    scaleY :0,
  },
}


  return (
    <motion.div variants={variant} animate='entry' exit='exit' >
      <section className={`text-gray-400 body-font`}> 

  <div className="container pt-32 pb-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="text-xxl font-bold title-font mb-3 text-orange-400 tracking-wide md:text-5xl">ASTROCHAMP TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base md:text-lg ">Our team is a diverse and collaborative group of individuals, each bringing unique skills and perspectives. Together, we thrive on innovation and a shared passion for achieving common goals.</p>
    </div>


    <div className="flex flex-wrap justify-center lg:pl-6 items-center">


    <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-center justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={imageList[9]}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Doddi Bhavya</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Secretary</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/bhavya__0901' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/bhavya-doddi-993b60255' target='#'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={imageList[18]} ></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">A.V Sai Santosh</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Governor</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/aguru_santosh_official' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/aguru-venkata-saisantosh-patnaik-1b7393239' target="#"><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-center justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={imageList[7]}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Akshat Burman</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Governor</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/akshatvon.braun/' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/akshat-burman' target='#'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
  </div>

  <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-center justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={imageList[14]}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Mubbashir Akhtar</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Governor</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/mubasshir_akhtar' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/mubasshir-akhtar/'  target='#'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>


      


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={imageList[13]} ></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Het Sarsava</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Galactic Events Manager</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/hetsarsava' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/het-sarsava-3982a5260' target='#'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={imageList[12]} />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Harsh Sharma</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Cosmic Operations Director</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/harshsharma_.26' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/harsh-sharma-54554a232' target='#'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={imageList[16]}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Nishant Tomar</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Interstellar Management Chief</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/myself_nishant' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/nishant-tomar-7694aa2aa/' target='#'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={imageList[22]}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Yash Goyal</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Celestial Promotions Manager</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/_im_ag_ine' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/yash-goyal-686405294' target='#'><FaLinkedinIn /></a>
              </span>
          </div>
        </div>
      </div>


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={imageList[19]} ></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Sharath Kumar</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Core Squad</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/sharathkumarbakam' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/sharath-kumar-bakam-936823262' target='#'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>




      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={imageList[10]}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Bibhushree Mahapatra</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Promotions Manager</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/_kumaneko24' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/bibhushree-mahapatra-935a63258' target='#'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={imageList[17]}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Nobel Das</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Core Squad</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/nobel_das' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/nobel-das-2a74a828b' target='#'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={imageList[20]}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Vikas Maurya</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Core Squad</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/stardust_vii' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/vikas-maurya-a969681ab' target='#'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>


    </div>
  </div>

  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className=" font-bold title-font mb-4 text-orange-400 md:text-5xl">ASSOCIATES</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base md:text-lg">AstroChamp's student associates play a crucial role in ensuring the seamless execution and success of the fest, contributing their dedication and skills throughout the event.</p>
    </div>

    <div className="flex flex-wrap -m-2">

      {associates.map( (associate, index) =>(
        <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">{associate}</h2>
          </div>
        </div>
      </div>
      ))}
      <AnimatePresence>
      {showmorebtn && 
      <motion.div variants={variant1} initial="entry" exit="exit" animate="animate" className="flex flex-wrap origin-top">
      {ass2.map( (ass, index) => (
        <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">{ass}</h2>
          </div>
        </div>
      </div>
      ))}
      </motion.div>}  
      </AnimatePresence>
      
      <motion.button animate={control} style={{color:"goldenrod",margin:"10px",fontSize:"larger"}} onClick={()=> setShowmoreBtn(!showmorebtn)} > Show {(showmorebtn) ? "less..." : "more..."} </motion.button>
    </div>
  </div>
    
    {/* Footer */}
    <div className={Styles.FooterDiv} style={{color:'gray !important',marginLeft:'2.5vw'}}>

      <div className='mb-1 font-xs md:text-2xl text-lg '> Astro_Champ | Nakshatra, IITBBS </div>
      <div className={Styles.FooterFont}> Dive into the cosmic adventure at AstroChamp 2024! Explore the universe through quizzes, art, science, and more. <br ></br> Join us in this celestial celebration!" <hr /></div> 
      {/* <div style={{marginTop:"4px"}} className='md:text-xl'><span style={{color:"goldenrod"}} > Collaborations </span>: WebnD Society  </div> */}


      <div className={Styles.FooterEnd}> 
        <div>© Copyright 2024 | All rights Reserved </div>
        <div> Designed and developed by <a href="https://www.github.com/Nishant-Tomar1" target='#' style={{textDecoration:'none',color:'purple'}}>Nishant Tomar</a> (team Astro_Champ) </div>
      </div>

    </div>


    

</section>
    </motion.div>
  )
}

export default Team
