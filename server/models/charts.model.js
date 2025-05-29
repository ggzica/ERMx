import mongoose from "mongoose";

const chartSchema = new mongoose.Schema({
    history:{type:String,required:false},
    subjective:{type:String,required:false},
    objective:{type:Date,required:false},
    analyse:{type:String,required:false},
    treatmentPlan:{type:String,required:false},
    intervention:{type:String,required:false},
    evalutation:{type:String,required:false},
    recommendation:{type:String,required:false}
    
},{timestamps:true})



const Chart = mongoose.model('Chart',chartSchema)
export default Chart
