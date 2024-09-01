//Import dependencies
import dotenv  from 'dotenv';
import express, { json } from 'express';
import cors from 'cors';
import connectToDb from "./db/connectToDb.js";
import { homepageMessage, createMessage, fetchMessages } from './controllers/messageController.js';

//Load ENV Variables
dotenv.config({
    path : ".env"
})

//Create an express app
const app = express();
 
//Configure express app
app.use(json());
app.use(cors());
app.use(express.static("build"));

//Connect to Database
connectToDb()
.then(()=>{
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`App listening on port ${process.env.PORT}`)
    })
})
.catch((err)=> {
    console.log("MongoDB Connection Failed!!! : ",err)
})


// Routing 
app.get('/api/v1/', homepageMessage);

app.post("/api/v1/send-message", createMessage);

app.get("/api/v1/all-messages", fetchMessages); 

