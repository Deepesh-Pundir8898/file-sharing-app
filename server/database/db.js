import mongoose from "mongoose";

const DBconnection = async()=>{
    try {
       await mongoose.connect("mongodb://localhost:27017/file-sharing");
       console.log("Database connected successfully")
    } catch (error) {
        console.error("Error while connecting with the database",error)
    }
}

export default DBconnection;