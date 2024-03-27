import mongoose from "mongoose";
const EmployerSchema = new mongoose.Schema({
    
    name:{type:String,required:[true,"username is required"],trim:true},
    mobile:{type:Number,required:[true,"mobile is required"],trim:true},
    email:{type:String,required:[true,"email is required"],trim:true},
    company:{type:String,required:[true,"company is required"],trim:true},
    password:{type:String,required:[true,"password is required"],trim:true},
    status:{type:String,enum:["Active","Inactive","Deleted","Pending"],required:[true,"status is required"],trim:true,default:"Pending"}
});

const EmployerModel = mongoose.model("EmployerReg",EmployerSchema);

export default EmployerModel;