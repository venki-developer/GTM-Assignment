import  express  from "express";
import { createStudent, deleteStudentById, getAllStudents, getStudentById, updateStudentById } from "../controllers/StudentController.js";

const router = express.Router();

router.route('/').post(createStudent).get(getAllStudents);
router.route('/:id').get(getStudentById).post(updateStudentById).delete(deleteStudentById);


export default router;