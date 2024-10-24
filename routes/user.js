import express from 'express';
import {register,verifyEmail} from '../controllers/userController.js'; // Đừng quên thêm .js nếu dùng ES Module

const router = express.Router();


// Route cho chức năng đăng ký
router.post('/', register);

// Route cho chức năng xác thực email
router.get('/verify-email', verifyEmail);

export {router};
