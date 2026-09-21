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

// --- Function to Remove a Product ---
const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;
        await productModel.findByIdAndDelete(id);
        res.json({ success: true, message: "Product Removed Successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// --- Function to Get a Single Product's Details ---
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await productModel.findById(productId);
        res.json({ success: true, product });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// --- Function to Batch Seed Products from Old Catalog Array ---
const seedProducts = async (req, res) => {
    try {
        const localProductsArray = [
            {
                name: "Women Round Neck Cotton Top",
                description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
                price: 100,
                image: ["https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500"],
                category: "Women",
                subCategory: "Topwear",
                sizes: ["S", "M", "L"],
                bestseller: true,
                date: Date.now()
            },
            {
                name: "Girls Round Neck Cotton Top",
                description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
                price: 220,
                image: ["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500"],
                category: "Kids",
                subCategory: "Topwear",
                sizes: ["S", "L", "XL"],
                bestseller: true,
                date: Date.now()
            }
            // 💡 You can copy-paste your other items from assets.js directly here!
        ];

        // Bulk insert array data directly into your local MongoDB collection
        await productModel.insertMany(localProductsArray);

        res.json({ success: true, message: "Database Seeded Successfully with local products!" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Exporting all 5 functions required by productRoutes.js
export { addProduct, listProducts, removeProduct, singleProduct, seedProducts };