import express from 'express';
import { adminLogin } from '../controllers/userController.js';

const userRouter = express.Router();

// Route for admin login
userRouter.post('/admin', adminLogin);

export default userRouter;