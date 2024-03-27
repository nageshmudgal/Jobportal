import express from "express"; 
const router = express.Router()
import GuestController from "../controllers/GuestController.js";

// public
router.get("/jobs",GuestController.DisplayJobs);
router.get("/companies",GuestController.Displayemps);


export default router;