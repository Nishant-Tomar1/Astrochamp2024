import {Message} from "../models/message.js"

//Homepage message
const homepageMessage = async (req, res) => {
    res.json({Backend : "Working Succesfully"});
};

const fetchMessages = async (req, res) => {
    const messages = await Message.find();
    res.json({ messages }); 
};


//Create a message
const createMessage =  async (req, res) =>{
    const {name, email, message} = req.body ;  
    // console.log(req.body); 
    
    const msg = await Message.create({
        name,
        email,
        message,
    });

    res.json({msg});
};

export {
    homepageMessage,
    fetchMessages,
    createMessage
};

