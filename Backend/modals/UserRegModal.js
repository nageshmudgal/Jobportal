import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    
    userName:{type:String,required:[true,"username is required"],trim:true},
    userMobile:{type:Number,required:[true,"mobile is required"],trim:true},
    userEmail:{type:String,required:[true,"email is required"],trim:true},
    userPassword:{type:String,required:[true,"password is required"],trim:true},
    status:{type:String,enum:["Active","Inactive","Deleted","Pending"],required:[true,"status is required"],trim:true,default:"Pending"}
});

const UserModel = mongoose.model("UserReg",UserSchema);

export default UserModel;