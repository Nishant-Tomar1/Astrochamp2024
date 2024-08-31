import React from 'react'
import { motion } from 'framer-motion'

function Register() {
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
    <motion.div variants={variant} animate='entry' exit='exit'>
    
      <div className='flex  h-40 items-center justify-content-center'><a href='https://forms.gle/sj7gYPFAPnbqR4T86' target='-blank' >Register Yourself</a></div>
    </motion.div>
  )
}

export default Register
