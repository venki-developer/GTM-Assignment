import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    dept:{
        type:String
    },
    doj:{
        type:Date
    }
});

const Student = mongoose.model('Student',studentSchema);
export default Student;


