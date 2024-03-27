import express from "express"; 
const router = express.Router()
import UserProfileController from "../controllers/UserProfileController.js";

// router.get("/",UserController.Getdata);
router.post("/register", UserProfileController.Registration);
// router.post("/login",UserController.Login);
// router.put("/update/:id",UserController.UpdateByID);
// router.delete("/delete",UserController.DeleteAll);
// router.delete("/delete/:id",UserController.DeleteByID);

export default router;