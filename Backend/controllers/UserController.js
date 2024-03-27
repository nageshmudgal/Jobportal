import UserModel from "../modals/UserRegModal.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import JobApplicationModel from "../modals/JobApplied.js";


const Registration = async (req, res) => {
    const { userName, userEmail, userMobile, userPassword, userRPassword } = req.body;
    if ( userName && userEmail && userPassword && userRPassword) {
        const saltkey = await bcryptjs.genSalt(12);
        const hashpass = await bcryptjs.hash(userPassword,saltkey)
        if (userPassword === userRPassword) {
            try {
                const doc = new UserModel({userName,userEmail,userMobile,userPassword:hashpass});
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
        res.send({status:"Password Issue",message:"Re-entered Password doesn't match"});
    }
    else
    res.send({status:"Registeration Unsuccessful",message:"Fill Registeration form Properly"});
}

let myColl;
const Login = async(req,res)=>{
    const { userEmail,userPassword } = req.body;
    const user = await UserModel.find({userEmail:userEmail})
    if(user[0].status!='Active')
    {
        res.send({message:"Your account is "+user[0].status})
    }
    
    if (user.length>0){
        const chkPass = await bcryptjs.compare(userPassword,user[0].userPassword);
        if(chkPass)
        {
            const userdata = {
                userName:user[0].userName,
                userEmail:user[0].userEmail,
                userMobile:user[0].userMobile
            }
            const email = userdata.userEmail
            // Create token
            const token = jwt.sign(
                { user_id: user[0]._id, email },
                "my_secret_key",
                {
                expiresIn: "2h",
                }
            );
            // save user token
            userdata.token = token;

            console.log("login Successfull")
            res.send({message:"Login Successfull",data:userdata})
        }
        else
        {
            res.send({message:"Wrong password"})
        }
    }
    else
    {
        res.send({message:"no user found of such email"})
    }
}

const UserDashboard = async(req,res)=>{
    
    const result = jwt.verify(req.token,"my_secret_key")     // get token data in result variable
    const user = await UserModel.find({_id:result.user_id})
    if (user.length>0){
        const userdata = {
            user_id:user[0]._id,
            userName:user[0].userName,
            userEmail:user[0].userEmail,
            userMobile:user[0].userMobile
        }
        res.send({message:"Welcome to Dashboard",data:userdata})
    }
    else
    {
        res.send({message:"no user of this token"})
    }
}

const GetAlldata = async(req,res)=>{
    const tok = req.token
    const chk = jwt.verify(req.token,"my_secret_key")
    if(chk)
    {
        myColl = await UserModel.find();
        res.send({message:"All Student",data:myColl})
    }
    else
    {
        res.send({message:"token not verified"})
    }
    
}

const GetByID = async(req,res)=>{
    myColl = await UserModel.find({_id:req.params.id});
    res.send({message:"Student Details",data:myColl})
}

const UpdateByID = async(req,res)=>{
    myColl = await UserModel.findOneAndUpdate({_id:req.params.id},req.body); 
    
    res.send({message:"Details Updated"})
}

const DeleteByID = async(req,res)=>{
    myColl = await UserModel.findOneAndDelete({_id:req.params.id}); 
    res.send({message:"Student Deleted"})
}

const DeleteAll = async(req,res)=>{
    myColl = await UserModel.deleteMany();
    res.send({message:"All Deleted"})
}

const Apply = async(req,res)=>{
    try
    {
    const doc = new JobApplicationModel({jobid:req.body.jobid,userid:req.body.userid});
    await doc.save();
    res.send({message:"Applied"})
    }
    catch(err)
    {
        console.log(err)
        res.send({message:"Error",err})

    }
}

const Appliedjobs = async(req,res)=>{
    try
    {
        const appliedjobsdata = await JobApplicationModel.find({userid:req.body.userid}).populate("jobid")
        console.log("aplied jobs api hit",req.body.userid)
        res.send({message:"Applied jobs: ",data:appliedjobsdata})
    }
    catch(err)
    {
        console.log(err)
        res.send({message:"err",err})
    }
}

export default {Registration,Login,UserDashboard,GetAlldata,UpdateByID,DeleteByID,DeleteAll,GetByID,Apply,Appliedjobs};
