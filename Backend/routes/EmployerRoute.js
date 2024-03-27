import express from "express"; 
const router = express.Router()
import EmployerController from "../controllers/EmployerController.js";

const verifyToken = (req,res,next) =>{
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
router.get("/userprofile/:id",EmployerController.UserProfile);
router.get("/applications/:id",EmployerController.ApplicationsReceived);
router.get("/postedjobs",verifyToken,EmployerController.DisplayJobs);
router.get("/allemp",EmployerController.Getdata);
router.get("/",verifyToken,EmployerController.EmployerDashboard);
router.get("/:id",EmployerController.GetByID);
router.post("/register", EmployerController.Registration);
router.post("/login",EmployerController.Login);
router.post("/jobpost",EmployerController.JobPost);

// router.put("/update/:id",EmployerController.UpdateByID);
// router.delete("/delete",EmployerController.DeleteAll);

router.delete("/delete/:id",EmployerController.DeleteByID);

export default router;