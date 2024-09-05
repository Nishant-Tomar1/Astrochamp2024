import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Styles from '../Styles/Events.module.css';
import SpaceQuiz from "../Components/EventImages/SpaceQuiz.jpg";
import AsteroidVenture from "../Components/EventImages/AsteroidVenture.jpg";
import WaterRocket from "../Components/EventImages/WaterRocket.jpg";
import StarbornSagas from "../Components/EventImages/StarbornSagas.jpg";
import CosmoMath from "../Components/EventImages/cosmomath.jpeg";
import Astrophotography from "../Components/EventImages/astrophography.jpg"
import Cp from "../Components/EventImages/cp.png"
import stargazing from "./EventImages/stargazing.jpeg"
import exhibition from "./EventImages/exhibition.jpg"

function Events() {
  const [btn1state, setbtn1State] = useState(true);
  const [btn2state, setbtn2State] = useState(true);
  const [btn3state, setbtn3State] = useState(true);
  const [btn5state, setbtn5State] = useState(true);
  const [btn6state, setbtn6State] = useState(true);
  const [btn7state, setbtn7State] = useState(true);
  const [btn8state, setbtn8State] = useState(true);
  // const [btn9state, setbtn9State] = useState(true);
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
    <motion.div variants={variant} animate='entry' exit='exit' className='items-center justify-center'>

<section class="text-gray-600 body-font ">

  <div>
    <div className="flex flex-col text-center w-full mt-32 px-5">
        <h1 className="text-xxl font-bold title-font mb-3 tracking-wide md:text-5xl" style={{color:"goldenrod"}}>Register for all the events @349/- only</h1>
        <div className='flex items-center w-full justify-center'> <Link className="text-xl px-4 py-2 rounded-full border-orange-400 border-1 text-orange-400 bg-black ease-in duration-300 hover:border-green-600 hover:text-green-400  text-decoration-none"  to="https://forms.gle/2Dd4UpLU3wuNBxFh7" target='blank' > Register Now ! </Link></div>
    </div>
  </div>

  
  <div class="container mx-auto flex flex-col  px-2 pt-24 lg:pt-24 justify-center items-center">
    <img class="lg:w-2/3 md:w-4/6 w-5/6  mb-6 border-1 border-orange-400 object-cover object-center rounded h-64" alt="" src={SpaceQuiz} />
    <div class="w-full md:w-5/6 flex flex-col mb-16 px-4 items-center text-center">
      <h1 class="title-font sm:text-4xl text-2xl mb-3 font-medium text-orange-400">1. SPACE QUIZ</h1>
      <p class="mb-8 leading-relaxed text-md md:text-lg text-white-400"> A two-round Quiz competition based on astronomy, aerospace and 
astrophysics where your knowledge in these fields will be put to the test. The quiz shall cover general topics related to cosmology in a fun and intriguing way. It is a team event. Maximum 2 person per team are allowed.<br></br>
<span className={Styles.SpecialText} >Date : </span> 28 September, 2024 |
<span className={Styles.SpecialText} > Time : </span>09 : 00 am* |
<span className={Styles.SpecialText} >  Mode : </span> Offline. <br /> <br />
<Link className={Styles.Registerbtn}  to="https://forms.gle/Zb247ahM8jUnGa77A" target='blank' >Register Now! </Link> <p><br /></p> <hr />
<details className="dropdown" value=" Show Rules "> 
  <summary className=" text-orange-400 text-md pb-2" onClick={() => {setbtn1State(!btn1state)}} >{btn1state ? " Show Rules" : " Hide Rules"}</summary>
    {/* <span className={Styles.SpecialText} style={{fontSize : "1.5rem"}} >Rules : </span> */}
   Open for all.
   The quiz shall cover general topics related to cosmology in a fun and intriguing way.
There will be two rounds. A preliminary round to screen the top 8 teams followed by the finals. 
A team shall consist of 2 members at most.

The prelims shall consist of 20 questions on the aforementioned topics.
 
 The finals shall consist of 3 rounds with two infinite pounce/bounce rounds with a written round of 5 questions in between. 
 The decision of the QM is final and binding. <br />
 <span className='font-bold text-orange-500'> Judging Criteria : </span>

Team with the most points at the end of round 2 wins. (if a tie occurs, then a similar method as round 1 will be used)

If a team  caught involved in any malpractice, then the team will be straight on disqualified.
<br />
<span className='font-bold text-orange-500'> POC:- Spandan Satpathy- 8249670830
</span>

</details>  
</p>

    </div>
  </div>


  <div class="container mx-auto flex flex-col px-2  justify-center items-center">
    <img class="lg:w-2/3 md:w-4/6 w-5/6 mb-6 border-1 border-orange-400 object-cover object-center rounded h-64  " alt="" src={AsteroidVenture} />
    <div class="w-full md:w-5/6 flex flex-col mb-16 px-4 items-center text-center">
      <h1 class="title-font sm:text-4xl text-2xl mb-3 font-medium text-orange-400">2. ASTEROID VENTURE</h1>
      <p class="mb-8 leading-relaxed text-md md:text-lg text-white-400">An exciting case study based competition where a problem statement related to asteroid mining will be given and you have to solve it in a limited time period given to you. <br></br>
      <span className={Styles.SpecialText} >Start Date : </span> 22 September, 2024 |
<span className={Styles.SpecialText} > Submittion Deadline : </span> 29 September, 2024 - 9 : 00 pm* |
<span className={Styles.SpecialText} >  Mode : </span> Online. <br /><br />
<Link className={Styles.Registerbtn}  to="https://forms.gle/7MWE5qxm1Asf9dri6" target='blank' >Register Now! </Link> <p><br /></p> <hr />
<details className="dropdown" value=" Show Rules "> 
  <summary className=" text-orange-400 text-md pb-2" onClick={() => {setbtn2State(!btn2state)}} >{btn2state ? " Show Rules" : " Hide Rules"}</summary>
    Teams must submit the following deliverables: <br />
    
    <span className='font-bold text-orange-500'> 1. </span> A comprehensive project report detailing the asteroid mining strategy.
    <span className='font-bold text-orange-500'> 2. </span> A presentation outlining the mission design, technological innovations, and business model.
    <span className='font-bold text-orange-500'> 3. </span> A sustainability and ethics plan addressing the environmental and ethical implications of the mission.
Submissions must be made in the specified format through the Unstop platform. <br />
<span className='font-bold text-orange-500'> Judging Criteria : </span> <br />
<span className='font-bold'> 
  Innovation and Feasibility (30%):
</span>
 The originality and practicality of the proposed solutions. <br />

 <span className='font-bold'> 
Technical Excellence (25%): 
</span>
The depth of technical analysis and understanding of space mining challenges. <br />
<span className='font-bold'> 
Business Viability (25%):
</span>
 The robustness and adaptability of the business model, including financial planning, investment strategies, and market adaptability. <br />
 <span className='font-bold'> 
Sustainability and Ethics (15%): 
</span>
 The effectiveness of strategies to minimize environmental impact and adhere to ethical standards. <br />

<span className='font-bold'>  
Presentation (5%):
</span>
 The clarity, coherence, and persuasiveness of the final presentation.


General Rules:
Each team can submit only one entry.
Plagiarism or any form of intellectual dishonesty will lead to immediate disqualification.
The decisions of the judges are final and binding.
Teams must adhere to all deadlines; late submissions will not be accepted

<br />
<span className='font-bold text-orange-500'>  
POC: Yuvraj Singh - 7091708504
</span>


</details>  
</p>    
    </div>
  </div>


  <div class="container mx-auto flex flex-col px-2  justify-center items-center">
    <img class="lg:w-2/3 md:w-4/6 w-5/6 mb-6 border-1 border-orange-400 object-cover object-center rounded h-64  " alt="" src={WaterRocket} />
    <div class="w-full md:w-5/6 flex flex-col mb-16 px-4 items-center text-center">
      <h1 class="title-font sm:text-4xl text-2xl mb-3 font-medium text-orange-400">3. BLAST OFF</h1>
      <p class="mb-8 leading-relaxed text-md md:text-lg text-white-400">A water bottle rocket competition in which you have to make your own water 
bottle rocket and use the provided launcher to maximize the distance travelled 
by your rocket. It is a team event. Maximum 5 person per team are allowed. <br></br>
<span className={Styles.SpecialText} >Date : </span> 29 September, 2024 |
<span className={Styles.SpecialText} > Time : </span>09:00 am* |
<span className={Styles.SpecialText} >  Mode : </span> Offline. <br /><br />
<Link className={Styles.Registerbtn}  to="https://forms.gle/cteNDHDkrSnfiyNw5" target='blank' >Register Now ! </Link> <p><br /></p> <hr />
<details className="dropdown" value=" Show Rules "> 
  <summary className=" text-orange-400 text-md pb-2" onClick={() => {setbtn3State(!btn3state)}} >{btn3state ? " Show Rules" : " Hide Rules"}</summary>
  
    <span className={Styles.SpecialText} style={{fontSize : "1.5rem"}} >Rules : </span> <br />
    You only need the rocket part, launching system will be provided by IIT 
Bhubaneswar.
Only one rocket per team is allowed. 
Only water can be used for propulsion.
The rocket needs to hold a pressure of greater than 60psi.
Minimum bottle size required is 2 liters.
Minimum diameter of the water bottle neck should be at least 1.5 inch. <br />
Three tries per team will be given.
<br />
<span className='font-bold text-orange-500'> Judging Criteria : </span> <br />
Farthest of three tries will be counted as your final score.
Top three teams with highest scores will be the winning teams. <br />
<span className='font-bold text-orange-500'> POC:- Sudhanshu Jha - 7289025381 </span>
</details>  
</p>    
    </div>
  </div>



  <div class="container mx-auto flex flex-col px-2  justify-center items-center">
    <img class="lg:w-2/3 md:w-4/6 w-5/6 mb-6 border-1 border-orange-400 object-cover object-center rounded h-64  " alt="" src={StarbornSagas} />
    <div class="w-full md:w-5/6 flex flex-col mb-16 px-4 items-center text-center">
      <h1 class="title-font sm:text-4xl text-2xl mb-3 font-medium text-orange-400">4. STARBORN SAGAS</h1>
      <p class="mb-8 leading-relaxed text-md md:text-lg text-white-400">A competition where you can express your creativity and thoughts in form of 
words! Given the beginning of an exciting story, your job is to complete it in the 
most amazing way possible!. It will be organized for both English and Hindi language. <br></br>
<span className={Styles.SpecialText} >Date : </span> 28 September, 2024 |
<span className={Styles.SpecialText} > Time : </span>06 : 00 pm* |
<span className={Styles.SpecialText} >  Mode : </span> Offline. <br /><br />

<Link className={Styles.Registerbtn}  to="https://forms.gle/z7n79kqorhtwi9fcA" target='blank' >Register Now ! </Link> <p><br /></p><hr />
<details className="dropdown" value=" Show Rules "> 
  <summary className=" text-orange-400 text-md pb-2" onClick={() => {setbtn5State(!btn5state)}} >{btn5state ? " Show Rules" : " Hide Rules"}</summary>
  
    A paragraph of 50-100 words will be provided.

The story must begin with the given paragraph.

The story must not be exceeding 1000 words in total (excluding the provided paragraph).

The paragraph will be given on the time of event itself.

4 hours will be given to complete the story.

Sheets will be provided.Participants have to bring their own pens.

Any attempt to malpractice will lead to disqualification.

Any details or justification, if needed, will be shared later.
<br />
<span className='font-bold text-orange-500'> Judging Criteria : </span> <br />

Submissions will be judged on the basis of creativity, vocabulary and realness of the ending. <br />
<span className='font-bold text-orange-500'> POC:-  Piyush Kashyap - 9827871224
</span>


</details>  
</p>    
    </div>
  </div>

  <div class="container mx-auto flex flex-col px-2  justify-center items-center">
    <img class="lg:w-2/3 md:w-4/6 w-5/6 mb-6 border-1 border-orange-400 object-cover object-center rounded h-64  " alt="" src={Astrophotography} />
    <div class="w-full md:w-5/6 flex flex-col mb-16 px-4 items-center text-center">
      <h1 class="title-font sm:text-4xl text-2xl mb-3 font-medium text-orange-400">5. ASTROPHOGRAPHY</h1>
      <p class="mb-8 leading-relaxed text-md md:text-lg text-white-400">A Photography competition for the photography enthusiasts to showcase there skills by clicking eye catching or rare photographs of the night sky<br></br>
<span className={Styles.SpecialText} >Start Date : </span> 17 September, 2024 |
<span className={Styles.SpecialText} > Submittion Deadline : </span> 27 September, 2024* |
<span className={Styles.SpecialText} >  Mode : </span> Online. <br /><br />

<Link className={Styles.Registerbtn}  to="https://forms.gle/pEXPSuSQ7D5uVphw6" target='blank' >Register Now ! </Link> <p><br /></p><hr />
<details className="dropdown" value=" Show Rules "> 
  <summary className=" text-orange-400 text-md pb-2" onClick={() => {setbtn7State(!btn7state)}} >{btn7state ? " Show Rules" : " Hide Rules"}</summary>
  
    10 days will be provided after the commencement of the competition to take the image.

The submitted photos must be in JPEG format and a PDF file needs to be submitted containing relevant information such as date, location, target object, exposure, etc.
 
Selective editing is prohibited. If an image is edited, then an unedited version of the image must be submitted.
 
A caption and the proper description of the captured event must be provided.

Captions can be in any language, but it is necessary to provide the meaning of the caption in English.

Only 1 submission per participant is allowed. <br />
The description of the picture should be in English only. 

Only valid submissions will be accepted for judging. (A submission will be considered only if the mentioned data is submitted for the image, and the date and time of the image captured is within one year from the last submission date). 

EXIF data should be shared with every submission. (EXIF data screenshot). Any attempt to malpractice will lead to disqualification. 

Any other details or justifications, if needed, will be shared later.
<br />
<span className='font-bold text-orange-500'> Judging Criteria : </span> <br />

Participants will be judged on the uniqueness of every section. <br />
<span className='font-bold text-orange-500'> POC:- Het Sarsava - 635251080
</span>

</details>  
</p>    
    </div>
  </div>

  <div class="container mx-auto flex flex-col px-2  justify-center items-center">
    <img class="lg:w-2/3 md:w-4/6 w-5/6 mb-6 border-1 border-orange-400 object-cover object-center rounded h-64  " alt="" src={Cp} />
    <div class="w-full md:w-5/6 flex flex-col mb-16 px-4 items-center text-center">
      <h1 class="title-font sm:text-4xl text-2xl mb-3 font-medium text-orange-400">6. COMPETITIVE PROGRAMMING</h1>
      <p class="mb-8 leading-relaxed text-md md:text-lg text-white-400">A coding competition where participants solve algorithmic problems within a limited time. It tests speed, logic, and efficiency, offering valuable experience for real-world tech challenges.<br></br>
<span className={Styles.SpecialText} >Date : </span> 28 September, 2024 |
<span className={Styles.SpecialText} > Time : </span>03 : 00 pm*  |
<span className={Styles.SpecialText} >  Mode : </span> Online (Hackerrank). <br /><br />

<Link className={Styles.Registerbtn}  to="https://forms.gle/xeTNwks9r67ZW2ZUA" target='blank' >Register Now ! </Link> <p><br /></p><hr />
<details className="dropdown" value=" Show Rules "> 
  <summary className=" text-orange-400 text-md pb-2" onClick={() => {setbtn8State(!btn8state)}} >{btn8state ? " Show Rules" : " Hide Rules"}</summary>
  
  Participants can code in any of the following programming languages: C, C++, Java, Python.

Points will be awarded based on the correctness and efficiency of the solutions.

Each problem will have a specific point value. Partial points may be awarded for incomplete or partially correct solutions.

In the event of a tie, the team or individual with the faster submission time will be ranked higher.

All solutions must be submitted through the designated online platform within the given time frame.

Each submission will be automatically evaluated against a set of test cases. The results will be immediately visible to the participants.
<br />
<span className='font-bold text-orange-500'> Judging Criteria : </span> <br />
Plagiarism is strictly prohibited. Any participant found guilty of plagiarism will be disqualified immediately.
        
The judges' decision is final and binding. No appeals or disputes regarding the correctness of the test cases will be entertained.
 
Points will be awarded based on the correctness and efficiency of the solutions. Each problem will have a specific point value. Partial points may be awarded for incomplete or partially correct solutions.
 <br />
<span className='font-bold text-orange-500'> 
POC: Ramya Sri Vanjarapu - 9392982519

</span>

</details>  
</p>    
    </div>
  </div>

  
  <div class="container mx-auto flex flex-col px-2  justify-center items-center">
    <img class="lg:w-2/3 md:w-4/6 w-5/6 mb-6 border-1 border-orange-400 object-cover object-center rounded h-64  " alt="" src={CosmoMath} />
    <div class="w-full md:w-5/6 flex flex-col mb-16 px-4 items-center text-center">
      <h1 class="title-font sm:text-4xl text-2xl mb-3 font-medium text-orange-400">7. MATH-O-STELLAR</h1>
      <p class="mb-8 leading-relaxed text-md md:text-lg text-white-400">An online quiz type of event based on Non-Routine mathematics. It is a team event. Maximum 2 person per team. Problem solving and maths are the most in-demand skills which space lovers try to improve a lot and still it has no limits.  <br></br>
<span className={Styles.SpecialText} >Date : </span> 29 September, 2024 |
<span className={Styles.SpecialText} > Time : </span> 02 : 00 pm* |
<span className={Styles.SpecialText} >  Mode : </span> Online. <br /><br />

<Link className={Styles.Registerbtn}  to="https://forms.gle/5aXvY4Mk86Y2wEyF6" target='blank' >Register Now ! </Link> <p><br /></p>  <hr /> 
<details className="dropdown" value=" Show Rules "> 
  <summary className=" text-orange-400 text-md pb-2" onClick={() => {setbtn6State(!btn6state)}} >{btn6state ? " Show Rules" : " Hide Rules"}</summary>
  
  Its an online quiz type of event based on Non-Routine Mathematics.
  Maximum 2 members are allowed per team.

The members of the team can be from different schools/colleges.

It will comprise of online quiz on where there will be MCQ and Integer-Type answers.

Questions in the online quiz will be based on : Geometry , Algebra , Calculus , Number theory.
<br />
<span className='font-bold text-orange-500'> Judging Criteria : </span> <br />

Winners will be judged on highest score.<br />
<span className='font-bold text-orange-500'> POC:- Kunal - 8708563650
</span>


</details>  
</p>    
    </div>
</div>

<div class="container mx-auto flex flex-col px-2  justify-center items-center">
    <img class="lg:w-2/3 md:w-4/6 w-5/6 mb-6 border-1 border-orange-400 object-cover object-center rounded h-64  " alt="" src={stargazing} />
    <div class="w-full md:w-5/6 flex flex-col mb-16 px-4 items-center text-center">
      <h1 class="title-font sm:text-4xl text-2xl mb-3 font-medium text-orange-400">8. STARGAZING</h1>
      <p class="mb-8 leading-relaxed text-md md:text-lg text-white-400">It is an open event organized by the Team NAKSHATRA where all the students and faculty of IIT Bhubaneshwar are invited to see the beautiful universe through our telescopes.. <br></br>
<span className={Styles.SpecialText} >Date : </span> 28/29 September, 2024 |
<span className={Styles.SpecialText} > Time : </span>09 : 00 pm |
<span className={Styles.SpecialText} >  Mode : </span> Offline (SAC) <br /><br />
  </p>    
    </div>
  

  <div class="container mx-auto flex flex-col px-2  justify-center items-center">
    <img class="lg:w-2/3 md:w-4/6 w-5/6 mb-6 border-1 border-orange-400 lg:object-contain object-center rounded h-64  " alt="" src={exhibition} />
    <div class="w-full md:w-5/6 flex flex-col mb-16 px-4 items-center text-center">
      <h1 class="title-font sm:text-4xl text-2xl mb-3 font-medium text-orange-400">9. NAKSHATRA X RISC EXHIBITION </h1>
      <p class="mb-8 leading-relaxed text-md md:text-lg text-white-400">The Robotics and Intelligent Systems Club (RISC) is gearing up to present their ISRO Rover project at Nakshatra's upcoming AstroChamp event. RISC's participation is particularly exciting, as they will be showcasing the ISRO Rover, a project that demonstrates their commitment to pushing the boundaries of robotics. <br />

The ISRO Rover, developed by RISC members, is designed to explore and simulate real-world space missions, aligning perfectly with the event’s focus. This is a unique opportunity for attendees to experience the convergence of robotics and space exploration. The ISRO Rover is set to be a highlight of the event, showcasing the innovative spirit and technical expertise of RISC. Be sure to catch this exciting display at AstroChamp! <br></br>
<span className={Styles.SpecialText} >Date : </span> 28 September, 2024 |
<span className={Styles.SpecialText} > Time : </span>Afternoon |
<span className={Styles.SpecialText} >  Mode : </span> Offline at SAC <br /><br />
  </p>    
    </div>
  </div>




  {/* Footer */}
<div className={Styles.FooterDiv} style={{color:'gray !important'}}>

<div className='mb-1 font-xs md:text-2xl text-lg '>  AstroChamp | Nakshatra, IITBBS </div> 
<div className={Styles.FooterFont}> Dive into the cosmic adventure at AstroChamp 2024! Explore the universe through quizzes, art, science, and more. <br ></br> Join us in this celestial celebration!<hr /></div>
{/* <div style={{marginTop:"4px"}} className='md:text-xl'><span style={{color:"goldenrod"}}> Collaborations </span>: WebnD Society  </div> */}

<div className={Styles.FooterEnd}> 
  <div>© Copyright 2024 | All rights Reserved </div>
  <div> Designed and developed by <a href="https://www.github.com/Nishant-Tomar1" target='#' style={{textDecoration:'none',color:'purple'}}>Nishant Tomar</a> (team AstroChamp) </div>
</div>

</div>
</div>
  

</section>


  
    </motion.div>

  )
}

export default Events



