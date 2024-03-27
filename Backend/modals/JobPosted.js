import mongoose from "mongoose";
const JobpostSchema = new mongoose.Schema({
    empid:{type:mongoose.Schema.Types.ObjectId,ref:"EmployerReg",required:[true,"id is required"],trim:true},
    title:{type:String,required:[true,"title is required"],trim:true},
    salary:{type:String,required:[true,"package is required"],trim:true},
    mode:{type:String,enum:["WFH","WFO"],required:[true,"mode is required"],trim:true},
    skills:{type:String,required:[true,"skills is required"],trim:true},
    status:{type:String,enum:["Inactive","Active","Rejected","Pending"],required:[true,"Status is required"],trim:true,default:"Pending"}

});

const JobPostModel = mongoose.model("JobPost",JobpostSchema);

export default JobPostModel;