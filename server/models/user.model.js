import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
     name: {type:String,required:[true,'Name is required']},
     email: {type:String, required:[true,"Email is required"],unique:true,trim:true,minLenght:5,maxLenght:255,lowercase:true,match:[/\S+@\S+\.\S+/,'Please fill a valid email']},
     password: {type:String,required:[true,'Password is required'],minLenght:6}
     
},{timestamps:true})

const User = mongoose.model('User',userSchema)
export default User