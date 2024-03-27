import EmployerModel from "../modals/EmployerRegModal.js";
import JobPostModel from "../modals/JobPosted.js";
import JobApplicationModel from "../modals/JobApplied.js"
import UserRegModel from "../modals/UserRegModal.js"
import UserProfileModel from "../modals/UserProfileModal.js"
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const Registration = async (req, res) => {
    const { name, email, mobile, company, password, rpassword } = req.body;
    if ( name && email && mobile && company && password && rpassword) {
        if (password === rpassword) {
            const saltkey = await bcryptjs.genSalt(12);
            const hashpass = await bcryptjs.hash(password,saltkey)
            try {
                const doc = new EmployerModel({name,email,mobile,company,password:hashpass});
                await doc.save();
                return res.status(201).send({status:"Success",message:"Employer Registered Successfully"});
            }
            catch(err){
                console.log(err);
                res.send({status:"Error",message:"Unable to Register"});
            }
        }
        else
        res.send({status:"Password Issue",message:"Password Does Not Match"});
    }
    else
    res.send({status:"Registeration Unsuccessful",message:"Fill Registeration form Properly"});
}

let myColl;


const Login = async(req,res)=>{
    const { employerEmail,employerPassword } = req.body;
    const emp = await EmployerModel.find({email:employerEmail})
    
    if (emp.length>0){
        const chkPass = await bcryptjs.compare(employerPassword,emp[0].password);
        if(chkPass)
        {
            const Email = emp[0].email
            // Create token
            const token = jwt.sign(
                { user_id: emp[0]._id, Email },
                "my_secret_key_for_emp",
                {
                expiresIn: "2h",
                }
            );
            res.send({message:"Login Successfull",token})
        }
        else
        {
            res.send({message:"Wrong password"})
        }
    }
    else
    {
        res.send({message:"no emp found of such email"})
    }
}




const EmployerDashboard = async(req,res)=>{
    try{
    const result = jwt.verify(req.token,"my_secret_key_for_emp")     // get token data in result variable
    const user = await EmployerModel.find({_id:result.user_id})
    if (user.length>0){
        const userdata = {
            id:user[0]._id,
            name:user[0].company
        }
        res.send({message:"Welcome to Dashboard",data:userdata})
    }
    else
    {
        res.send({message:"no user of this token"})
    }
    res.send({message:"Welcome to Dashboard"})
    }
    catch(err)
    {
        console.log(err)
    }
}



const Getdata = async(req,res)=>{
    myColl = await EmployerModel.find(); 
    console.log(myColl);
    res.send({message:"All Employers",data:myColl})
}

const GetByID = async(req,res)=>{
    myColl = await EmployerModel.find({_id:req.params.id});
    res.send({message:"employer Details",data:myColl})
}

const UpdateByID = async(req,res)=>{
    myColl = await EmployerModel.findOneAndUpdate({_id:req.params.id},req.body); 
    
    res.send({message:"Emplyers Details Updated"})
}

const DeleteByID = async(req,res)=>{
    myColl = await EmployerModel.findOneAndDelete({_id:req.params.id}); 
    res.send({message:"Employer Deleted"})
}

const DeleteAll = async(req,res)=>{
    myColl = await EmployerModel.deleteMany(); 
    res.send({message:"All Employer Deleted"})
}

const JobPost = async (req, res) => {
    const { empid,title,salary,mode,skills } = req.body;
    if ( empid&&title&&salary&&mode&&skills) {
        try {
            const doc = new JobPostModel({empid,title,salary,mode,skills});
            await doc.save();
            return res.status(201).send({status:"Success",message:"job posted Successfully"});
        }
        catch(err){
            console.log(err);
            res.send({status:"Error",message:"Unable to post job"});
        }
    }
    else
    res.send({status:"Job post Unsuccessful",message:"Fill form Properly"});
}

// const PostedJobs = async(req,res)=>{
//     myColl = await EmployerModel.find({_id:req.params.id});
//     res.send({message:"employer Details",data:myColl})
// }
// const DisplayJobs = new Promise(() => {
//     const result = jwt.verify(req.token,"my_secret_key_for_emp")     // get token data in result variable
//     const user = await EmployerModel.find({_id:result.user_id})
//     myColl = await JobPostModel.find({empid:result.user_id}); 
//     console.log(myColl);
//     res.send({message:"jobs posted by this employer",data:myColl})
// })  
const DisplayJobs = async(req,res)=>{
    const result = jwt.verify(req.token,"my_secret_key_for_emp")     // get token data in result variable
    const user = await EmployerModel.find({_id:result.user_id})
    myColl = await JobPostModel.find({empid:result.user_id}); 
    console.log(myColl);
    res.send({message:"jobs posted by this employer",data:myColl})
}


const ApplicationsReceived = async(req,res)=>{
    try
    {
        console.log(req.params.id)
        const applicationsdata = await JobApplicationModel.find({jobid:req.params.id}).populate('userid').populate('jobid')
        res.send({message:"Applied jobs: ",data:applicationsdata})
    }
    catch(err)
    {
        console.log(err)
        res.send({message:"err",err})
    }
}

const UserProfile = async(req,res)=>{
    try
    {
        console.log(req.params.id)
        // const user = await UserRegModel.find({_id:req.params.id})
        // const userprofile = await UserProfileModel.find({userid:user})
        const userprofile = await UserProfileModel.find({userid:req.params.id}).populate("userid")
        return res.send({message:"user profile: ",data:userprofile})
    }
    catch(err)
    {
        console.log(err)
        res.send({message:"err",err})
    }
}
export default {Registration,Login,Getdata,DeleteByID,UpdateByID,DeleteAll,JobPost,GetByID,EmployerDashboard,DisplayJobs,ApplicationsReceived,UserProfile};