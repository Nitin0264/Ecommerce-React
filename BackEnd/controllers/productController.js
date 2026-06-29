import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';

// --- Function to Add a Product ---
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        // 1. Extract files uploaded via Multer fields safely
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        // 2. Upload images to Cloudinary and collect secure URL strings
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url;
            })
        );

        // 3. Prepare the clean database object data
        const productData = {
            name,
            description,
            category,
            subCategory,
            price: Number(price),
            // The sizes array usually travels as a JSON string from FormData; we convert it back to an array
            sizes: JSON.parse(sizes), 
            bestseller: bestseller === "true" ? true : false,
            image: imagesUrl,
            date: Date.now()
        };

        // 4. Save to MongoDB
        const product = new productModel(productData);
        await product.save();

        res.json({ success: true, message: "Product Added Successfully!" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// --- Function to List Products for Frontend ---
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addProduct, listProducts };