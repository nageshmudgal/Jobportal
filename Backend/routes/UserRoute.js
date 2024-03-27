import express from "express"; 
const router = express.Router()
import UserController from "../controllers/UserController.js";

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

// public
router.post("/appliedjobs",UserController.Appliedjobs);
router.post("/apply",UserController.Apply);
router.get("/",verifyToken,UserController.UserDashboard);
router.get("/:id",UserController.GetByID);
router.post("/register", UserController.Registration);
router.post("/login",UserController.Login);

// private

router.put("/update/:id",UserController.UpdateByID);
router.delete("/delete",UserController.DeleteAll);
router.delete("/delete/:id",UserController.DeleteByID);

export default router;