import mongoose from 'mongoose'
import { DB_URI, NODE_ENV} from '../config/env.js'


if(!DB_URI)
{
    throw new Error('Please define the MONGO DB_URI env variable inside .env.<dev/prod>.local')
}

//Connect to mongodb

const connectToDB = async()=>{
    try{
        await mongoose.connect(DB_URI)
        console.log(`Connected to DB in ${NODE_ENV} mode`)
    }
    catch(err){
        console.log("Error connecting to the Database :",err)
        process.exit(1)
    }
    
}

export default connectToDB