import mongoose from "mongoose";
const UserProfileSchema = new mongoose.Schema({
    userid:{type:mongoose.Schema.Types.ObjectId,ref:"UserReg",required:[true,"id is required"],trim:true},
    skill:{type:String,required:[true,"username is required"],trim:true},
    experience:{type:String,enum:["Yes","No"],required:[true,"mobile is required"],trim:true},
    expdetails:{type:String,required:[true,"email is required"],trim:true},
    otherinfo:{type:String,required:[true,"password is required"],trim:true},
});

const UserProfileModel = mongoose.model("UserProfile",UserProfileSchema);

export default UserProfileModel;