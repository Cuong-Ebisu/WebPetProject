import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import User from '../models/user.js'; // Đừng quên thêm .js nếu dùng ES Module
import {registerUser} from '../services/userService.js'; // Đừng quên thêm .js

export const register = async (req, res) => {
  // Kiểm tra lỗi từ validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Trả về các lỗi với mã trạng thái 400
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, firstName, lastName, password, role } = req.body;
    const newUser = await registerUser(email, firstName, lastName, password, role);
    res.status(201).json({ message: 'Email xác thực đã được gửi đến bạn, kèm theo một liên kết để xác thực tài khoản.', user: newUser });
  } catch (error) {
    // Kiểm tra xem lỗi có phải là do email đã tồn tại hay không
    if (error.message === 'Email đã tồn tại') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Lỗi máy chủ, vui lòng thử lại sau.' });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) {
      return res.status(400).json({ message: 'Token xác thực không hợp lệ hoặc đã hết hạn' });
    }

    // Xác thực token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    // Cập nhật trạng thái xác thực của người dùng
    await User.findByIdAndUpdate(userId, { isVerified: true });

    res.status(200).json({ message: 'Xác thực email thành công. Tài khoản của bạn đã được kích hoạt.' });
  } catch (error) {
    res.status(500).json({ message: 'Xác thực email không thành công' });
  }
};
