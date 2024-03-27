import express from "express";
import cors from "cors";
import connectDB from "./config/connectdb.js";
import UserRoute from "./routes/UserRoute.js";
import EmployerRoute from "./routes/EmployerRoute.js";
import UserProfileRoute from "./routes/UserProfileRoute.js";
import AdminRoute from "./routes/AdminRoute.js";
import GuestRoute from "./routes/GuestRoute.js";

const app = express();
app.use(cors());

import * as dotenv from 'dotenv';
dotenv.config()

const port = 8000;

// const URI = "mongodb+srv://nageshmudgal70:Nagesh123@cluster0.85jcq85.mongodb.net/?retryWrites=true&w=majority";
connectDB(process.env.URI);
// connectDB(URI);
app.use(express.json());

//Load Routes

app.use("/api/v1/guest", GuestRoute);
app.use("/api/v1/user", UserRoute);
app.use("/api/v1/userprofile", UserProfileRoute);
app.use("/api/v1/employer", EmployerRoute);
app.use("/api/v1/admin", AdminRoute);



app.listen(port, () => console.log("Connected"));