import mongoose from "mongoose";
export async function Dbconnect(){
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection=mongoose.connection;

        connection.on('connected',()=>{
            console.log('Database connection successful');
        })
        
        connection.on('error',()=>{
            console.log('Database connection error');
        })
    } catch (error) {
       console.log('something went wrong');
       console.log(error);   
    }
}