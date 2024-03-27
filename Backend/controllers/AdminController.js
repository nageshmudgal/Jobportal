import AdminModel from "../modals/AdminModal.js";
import UserModel from "../modals/UserRegModal.js";
import EmployerModel from "../modals/EmployerRegModal.js";
import JobPostModel from "../modals/JobPosted.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const Registration = async (req, res) => {
    const { adminName, adminEmail, adminPassword, adminRPassword } = req.body;
    if ( adminName && adminEmail && adminPassword && adminRPassword) {
        const saltkey = await bcryptjs.genSalt(12);
        const hashpass = await bcryptjs.hash(adminPassword,saltkey)
        if (adminPassword === adminRPassword) {
            try {
                const doc = new AdminModel({adminName,adminEmail,adminPassword:hashpass});
                await doc.save();
                console.log("inserted")
                return res.status(201).send({status:"Success",message:"Registered Successfully"});
            }
            catch(err){
                console.log(err);
                res.send({status:"Error",message:"Unable to Register"});
            }
        }
        else
        res.send({status:"Password Issue",message:"Re-entered Password is Incorrect"});
    }
    else
    res.send({status:"Registeration Unsuccessful",message:"Fill Registeration form Properly"});
}

let myColl;
const Login = async(req,res)=>{
    const { adminEmail,adminPassword } = req.body;
    const admin = await AdminModel.find({adminEmail:adminEmail})
    
    if (admin.length>0){
        const chkPass = await bcryptjs.compare(adminPassword,admin[0].adminPassword);
        console.log(chkPass)
        if(chkPass)
        {
            const email = admin[0].adminEmail
            // Create token
            const token = jwt.sign(
                { user_id: admin[0]._id, email },
                "my_secret_key_for_admin",
                {
                expiresIn: "2h",
                }
            );

            console.log("login Successfull")
            res.send({message:"Login Successfull",token})
        }
        else
        {
            console.log("login Failed")
            res.send({message:"Wrong password"})
        }
    }
    else
    {
        res.send({message:"no user found of such email"})
    }
}

const Displayusers = async(req,res)=>{
    try{
    // const tok = req.token
    // const chk = jwt.verify(req.token,"my_secret_key_for_admin")
    // if(chk)
    // {
        myColl = await UserModel.find();
        res.send({message:"All Users",data:myColl})
    // }
    // else
    // {
    //     res.send({message:"token not verified"})
    // }
    }
    catch(err)
    {
        res.send({message:"Error",err})
    }

}

const Displayemps = async(req,res)=>{
    try{
        // const tok = req.token
        // const chk = jwt.verify(req.token,"my_secret_key_for_admin")
        // if(chk)
        // {
            myColl = await EmployerModel.find();
            res.send({message:"All Employers",data:myColl})
        // }
        // else
        // {
        //     res.send({message:"token not verified"})
        // }
    }
    catch(err)
    {
        res.send({message:"Error",err})
    }
}

const DisplayJobs = async(req,res)=>{
    try{
        // const tok = req.token
        // const chk = jwt.verify(req.token,"my_secret_key_for_admin")
        // if(chk)
        // {
            const jobs = await JobPostModel.find().populate('empid');
            res.send({message:"All jobs",data:jobs})
        // }
        // else
        // {
        //     res.send({message:"token not verified"})
        // }
    }
    catch(err)
    {
        res.send({message:"Error",err})
    }
}

const EmployerUpdateByID = async(req,res)=>{
    try{
        const tok = req.token
        const chk = jwt.verify(req.token,"my_secret_key_for_admin")
        if(chk)
        {
            myColl = await EmployerModel.findOneAndUpdate({_id:req.params.id},req.body);
            res.send({message:"Details Updated"})
        }
        else
        {
            res.send({message:"token not verified"})
        }
    }
    catch(err)
    {
        res.send({message:"Error",err})
    }
}

const EmployerStatusUpdate = async(req,res)=>{
    try{
        // const tok = req.token
        // const chk = jwt.verify(req.token,"my_secret_key_for_admin")
        // if(chk)
        // {
            myColl = await EmployerModel.findOneAndUpdate({_id:req.params.id},req.body);
            res.send({message:"Details Updated"})
        // }
        // else
        // {
        //     res.send({message:"token not verified"})
        // }
    }
    catch(err)
    {
        res.send({message:"Error",err})
    }
}

const UserStatusUpdate = async(req,res)=>{
    try{
        // const tok = req.token
        // const chk = jwt.verify(req.token,"my_secret_key_for_admin")
        // if(chk)
        // {
            myColl = await UserModel.findOneAndUpdate({_id:req.params.id},req.body);
            res.send({message:"Details Updated"})
        // }
        // else
        // {
        //     res.send({message:"token not verified"})
        // }
    }
    catch(err)
    {
        res.send({message:"Error",err})
    }
}

const JobStatusUpdate = async(req,res)=>{
    try{
        // const tok = req.token
        // const chk = jwt.verify(req.token,"my_secret_key_for_admin")
        // if(chk)
        // {
            myColl = await JobPostModel.findOneAndUpdate({_id:req.params.id},req.body);
            res.send({message:"Details Updated"})
        // }
        // else
        // {
        //     res.send({message:"token not verified"})
        // }
    }
    catch(err)
    {
        res.send({message:"Error",err})
    }
}

// const UserDashboard = async(req,res)=>{
    
//     const result = jwt.verify(req.token,"my_secret_key")     // get token data in result variable
//     const user = await UserModel.find({_id:result.user_id})
//     if (user.length>0){
//         const userdata = {
//             userName:user[0].userName,
//             userEmail:user[0].userEmail,
//             userMobile:user[0].userMobile
//         }
//         res.send({message:"Welcome to Dashboard",data:userdata})
//     }
//     else
//     {
//         res.send({message:"no user of this token"})
//     }
// }

export default {Registration,Login,Displayusers,Displayemps,DisplayJobs,EmployerUpdateByID,EmployerStatusUpdate,UserStatusUpdate,JobStatusUpdate};
