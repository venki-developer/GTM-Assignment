import Student from '../model/Student.js';

export const createStudent = async (req,res)=>{
   try{
    // const student = await Student.findOne()
    const newStudent  = await Student.create(req.body);
    res.status(200).json({
        message:"New Student added sucessfully",
        status:"Success",
        data:newStudent
    })

   }catch(error){
        res.status(500).json({
            message:'Some thing went wrong',
            status:'Error',
            data:null
        })
   }
}

export const getAllStudents = async (req,res)=>{
   try{
    const students = await Student.find();
    res.status(200).json({
        message:"New Student added sucessfully",
        status:"Success",
        data:students

    })

   }catch(error){
    res.status(500).json({
        message:'Some thing went wrong',
        status:'Error',
        data:null
    })
   }
}
export const getStudentById = async (req,res)=>{
    try{
        const student = await Student.findById(req.params.id);
    res.status(200).json({
        message:"New Student added sucessfully",
        status:"Success",
        data:student

    })

    }catch(error){
        res.status(500).json({
            message:'Some thing went wrong',
            status:'Error',
            data:null
        })
    }
}
export const updateStudentById = async (req,res)=>{
    try{

        const student = await Student.findById(req.params.id);
        if(!student){
           return res.status(404).json({
                message:'Student data not found',
                status:'Error',
                data:null
            })

        }
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })


        res.status(200).json({
            message:"Student Data updated sucessfully",
            status:"Success",
            data:updatedStudent
    
        })

    }catch(error){
        res.status(500).json({
            message:'Some thing went wrong',
            status:'Error',
            data:null
        })
    }
}

export const deleteStudentById = async (req,res)=>{
    try{
        const student = await Student.findById(req.params.id);
        if(!student){
            return res.status(404).json({
                message:'Student data not found',
                status:'Error',
                data:null
            })
        }
        student.remove();
        res.status(200).json({
            message:"Student Data deleted sucessfully",
            status:"Success",
            data:student
    
        })


    }catch(error){
        res.status(500).json({
            message:'Some thing went wrong',
            status:'Error',
            data:null
        })
    }

}