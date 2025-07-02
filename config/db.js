import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://samreen:Samreen1234@cluster0.pou90bx.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}
