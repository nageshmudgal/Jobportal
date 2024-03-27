import EmployerModel from "../modals/EmployerRegModal.js";
import JobPostModel from "../modals/JobPosted.js";


const Displayemps = async(req,res)=>{
    try{
        const emp = await EmployerModel.find({status:'Active'});
        res.send({message:"All Employers",data:emp})
    }
    catch(err)
    {
        res.send({message:"Error",err})
    }
}


const DisplayJobs = async(req,res)=>{
    try{
        const jobs = await JobPostModel.find({status:'Active'}).populate('empid');
        res.send({message:"All jobs",data:jobs})
    }
    catch(err)
    {
        res.send({message:"Error",err})
    }
}







export default {Displayemps,DisplayJobs};
