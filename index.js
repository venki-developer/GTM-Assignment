import express from 'express';
import db from './config/mongoose.js';
import StudentRoutes from './routes/StudentRoutes.js';
import SocketIO from 'socket.io';
const app = express();
const port =8000;
db();
app.use(express.json());
app.use('/api/student',StudentRoutes);
const server = app.listen(port,(err)=>{
    if(err){
        console.log("error in listening",err);
    }
    console.log(`Server is running on the port ${port}`);
});

const io = new SocketIO(server);
io.on('connection', (socket) => {
  setInterval(() => {
    socket.emit('timestamp', new Date());
  }, 5000);
});
