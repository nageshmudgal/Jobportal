import UserProfileModel from "../modals/UserProfileModal.js";

const Registration = async (req, res) => {
    try{
        const doc = new UserProfileModel(req.body);
        await doc.save();
        return res.status(201).send({status:"Success",message:"Profile Created Successfully"});
    }
    catch(err){
        console.log(err);
        res.send({status:"Error",message:"Unable to Register"});
    }
}
    
// let myColl;

// const Getdata = async(req,res)=>{
//     myColl = await UserModel.find(); 
//     console.log(myColl);
//     res.send({message:"All Student",data:myColl})
// }

// const UpdateByID = async(req,res)=>{
//     myColl = await UserModel.findOneAndUpdate({_id:req.params.id},req.body); 
    
//     res.send({message:"Details Updated"})
// }
// const DeleteByID = async(req,res)=>{
//     myColl = await UserModel.findOneAndDelete({_id:req.params.id}); 
//     res.send({message:"Student Deleted"})
// }
// const DeleteAll = async(req,res)=>{
//     myColl = await UserModel.deleteMany(); 
//     res.send({message:"All Deleted"})
// }

export default {Registration};
