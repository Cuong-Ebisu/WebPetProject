import express from 'express';
import mongoose from 'mongoose';
import {trainerRoute} from './routes/trainerRoute.js'; 
import {spaRoute} from "./routes/spaRoute.js";
import bodyParser from 'body-parser';
import {register,verifyEmail} from './controllers/userController.js';
import {router} from "./routes/user.js";
import { registerValidation } from './validators/userValidator.js'; 


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());//middleware cho phép sử dụng json trong req.body 

spaRoute(app);
trainerRoute(app);
// Router cho chức năng đăng ký
app.use('/users', registerValidation, router);  // Định nghĩa route cho người dùng

// Route cho chức năng xác thực email
app.get('/verify-email', verifyEmail);

export default app;
