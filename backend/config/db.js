import mongoose from "mongoose";

 export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://karishma:karishma2000@cluster0.naj7azn.mongodb.net/food').then(() => console.log("DB Connected"));

}