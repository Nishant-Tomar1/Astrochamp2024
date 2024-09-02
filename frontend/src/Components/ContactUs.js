import React from 'react'
import {useState} from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Styles from "../Styles/ContactUs.module.css";
import axios from 'axios';


function ContactUs() {
  const control = useAnimationControls();
  const [btntext, setBtntext] = useState("Send");
  
  const [createForm, setCreateForm] = useState({
    name:"",
    email:"",
    message:"",
  });

  const updateCreateFormField = (e) => {
    const {name , value} = e.target;
    setCreateForm({
      ...createForm,
      [name] : value,
    })
  }

  const createNote = async (e) => {
  try{
    e.preventDefault();
    
    setTimeout(()=> {
    setCreateForm({name:"", email:"", message:""});
    setBtntext("Sent ✅");
    const btn = e.target.SubmitBtn;
    btn.disabled = true; 
    btn.style.cursor = "not-allowed";
    btn.style.borderColor = "lightgreen";
    btn.style.opacity = "75%";
    btn.classList.remove(`${Styles.hoverClass}`);
    control.start({
      scale: [1,0.01,0.01,1],
      transition : {
        times : [0,0.1,0.15,0.25],
      }
    });
    }, 500)
    
    await axios.post("https://astrochamp-e25b.onrender.com/api/v1/send-message", createForm);

  }catch(error){
    // console.log(error);
    setCreateForm({Name:"", email:"", message:""});
  }
}

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
    <motion.div variants={variant} animate='entry' exit='exit' className='flex flex-col items-center justify-center'>

  <div className="w-full md:w-4/5 overflow-hidden p-3 flex flex-col gap-6 justify-center items-center mt-20 ">

    <div style={{width:'100%',height:'70vh'}}>
      <iframe width="100%" height="100%" className="relative inset-0" frameBorder="0" title="map" marginHeight="5" marginWidth="5" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7062.1227120045605!2d85.67155698909002!3d20.14838391111869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19ac2e52a057f5%3A0x564b6e83a7504a16!2sIndian%20Institute%20Of%20Technology%20(IIT)%20Bhubaneswar!5e1!3m2!1sen!2sin!4v1705138207885!5m2!1sen!2sin" 
 style={{borderRadius:'16px',border:'2.4px solid gray'}}></iframe>
    </div>   
 
    <div className="w-4/5 md:w-1/2  bg-purple-800 lg:bg-purple-900 absolute flex flex-col py-4 rounded shadow-md opacity-1/2">
        <div className="px-6">
          <h2 className="title-font font-semibold text-black tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Indian Institute of Technology Bhubaneswar, Argul Khordha-752050, Odisha</p>
        </div>
        <div className=" px-6 mt-1 ">
          <h2 className="title-font font-semibold text-black tracking-widest text-xs">EMAIL</h2>
          <a className="" href="mailto:secyastronomy.sg@iitbbs.ac.in"  style={{textDecoration:"",color:"orange"}}>secyastronomy.sg@iitbbs.ac.in</a>
        </div>
      </div>
  </div>

<form action="" onSubmit={createNote}>
  <div className="container px-4 px-md-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-2">
      <h1 className="sm:text-3xl font-medium title-font text-orange-400 md:text-5xl">Send a Message!</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed  text-sm md:text-xl">Feel free to reach out with any questions or messages, and we'll get back to you as soon as we can.</p>
    </div>
    <div className="flex flex-col items-center w-full ">
      <div className="flex flex-wrap ">
        <div className="p-2 w-full md:w-2/5">
          <div className="relative ">
            <label htmlFor="name" className="leading-7 text-gray-400 md:text-lg" >Name</label>
            <input type="text" id="name" name="name" value={createForm.name} required onChange={updateCreateFormField}  className="w-full bg-transparent bg-opacity-0 border-2 rounded-xl  border-gray-600  focus:border-white focus:border-2 focus:ring-5 focus:ring-indigo-200 text-base outline-none text-white-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full md:w-3/5">
          <div className="relative">
            <label htmlFor="email" className="leading-7  text-gray-400 md:text-lg">Email</label>
            <input type="email" id="email" name="email" value={createForm.email} required onChange={updateCreateFormField} className="w-full bg-transparent bg-opacity-0 border-2 rounded-xl border-gray-600 focus:border-white focus:ring-5 focus:ring-indigo-200 text-base outline-none text-white-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message"  className="leading-7  text-gray-400 md:text-lg">Message</label>
            <textarea id="message" name="message" value={createForm.message} required onChange={updateCreateFormField} className=" border-2 h-32 w-full bg-transparent bg-opacity-0 rounded-xl border-gray-600 focus:border-white focus:ring-5 focus:ring-indigo-200 text-base outline-none text-white-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full text-center">
          <motion.input animate={control} className={`${Styles.SubmitBtn} ${Styles.hoverClass}`} type='Submit' value={btntext} id="SubmitBtn" onChange = {() => null}  />
        </div>
      </div>
    </div>
  </div>
  </form>



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
        
    </motion.div>
  )
}

export default ContactUs


