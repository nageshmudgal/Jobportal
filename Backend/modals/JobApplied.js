import mongoose from "mongoose";
const JobApplicationSchema = new mongoose.Schema({
    jobid:{type:mongoose.Schema.Types.ObjectId,ref:"JobPost",required:[true,"id is required"],trim:true},
    userid:{type:mongoose.Schema.Types.ObjectId,ref:"UserReg",required:[true,"id is required"],trim:true},
    status:{type:String,enum:["Pending","Accepted","Rejected"],required:[true,"Status is required"],trim:true,default:"Pending"}
});

const JobApplicationModel = mongoose.model("JobApplication",JobApplicationSchema);

export default JobApplicationModel;