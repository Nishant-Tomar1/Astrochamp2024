import { connect } from "mongoose";

async function connectToDb(){
    try{       
        const connectionInstance = await connect(`${process.env.DB_URL}`)
        console.log(`MongoDB database connected!! Db URL : ${connectionInstance.connection.host}`)

    }catch(err) {
        console.log("MongoDB connection Failed !!!: ",err);
        process.exit(1)
    }
}

export default connectToDb;
