import mongoose from "mongoose";
const AdminSchema = new mongoose.Schema({
    
    adminName:{type:String,required:[true,"Adminname is required"],trim:true},
    adminEmail:{type:String,required:[true,"Admin email is required"],trim:true},
    adminPassword:{type:String,required:[true,"Admin password is required"],trim:true}
});

const AdminModel = mongoose.model("Admin",AdminSchema);

export default AdminModel;