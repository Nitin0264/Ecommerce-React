import express from 'express';
import { addProduct, listProducts, removeProduct, singleProduct, seedProducts } from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

// 1. Initialize router first
const productRouter = express.Router();

// 2. Public / Seeding routes
productRouter.post('/seed', seedProducts);
productRouter.get('/list', listProducts);
productRouter.post('/single', singleProduct);

// 3. Admin protected routes
productRouter.post(
    '/add', 
    adminAuth, 
    upload.fields([
        { name: 'image1', maxCount: 1 },
        { name: 'image2', maxCount: 1 },
        { name: 'image3', maxCount: 1 },
        { name: 'image4', maxCount: 1 }
    ]), 
    addProduct
);
productRouter.post('/remove', adminAuth, removeProduct);

export default productRouter;