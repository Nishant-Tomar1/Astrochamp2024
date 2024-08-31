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
    const {Name, email, message} = req.body ; 

    const msg = await Message.create({
        Name,
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

