import express from "express"; 
const router = express.Router()
import AdminController from "../controllers/AdminController.js";

const verifyToken = (req,res,next) =>{
    try{
    const token = req.headers["authorization"].split(" ")[1] 
    console.log(token)
    if(token)
    {
        req["token"]=token
        next();
    }
    else
    {
        res.status(500).send({"message":"Failed token not Found"})
    }
    }
    catch(err)
    {
        res.send({"message":"no token"})
    }
}


// router.get("/",EmployerController.Getdata);

//public
router.post("/register", AdminController.Registration);
router.post("/login",AdminController.Login);

//private
router.get("/displayjobs",AdminController.DisplayJobs);
router.get("/displayusers",AdminController.Displayusers);
router.get("/displayemployers",AdminController.Displayemps);
router.put("/updateemployers/:id",AdminController.EmployerUpdateByID);
router.put("/userstatusupdate/:id",AdminController.UserStatusUpdate);
router.put("/jobstatusupdate/:id",AdminController.JobStatusUpdate);
router.put("/employerstatusupdate/:id",AdminController.EmployerStatusUpdate);



export default router;