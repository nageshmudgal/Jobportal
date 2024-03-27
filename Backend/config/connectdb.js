import mongoose from "mongoose";
const connectDB = async(Database_URL)=>{
    try{
        const DB_Options={
            dbName:"nageshDB"
        };
        await mongoose.connect(Database_URL,DB_Options);
        console.log("Connection connected...");
    }
    catch(err){
        console.log(err);
    }
};
export default connectDB;