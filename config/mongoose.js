import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const database = process.env.DB_URL;
mongoose.set('strictQuery', false);

const db = ()=>{
    mongoose.connect(database).then(()=> console.log('db connection established')).catch(()=> console.log("error connecting to"))
}



export default db;
