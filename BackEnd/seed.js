import mongoose from 'mongoose'
import productModel from './models/productModel.js' // Adjust path if needed
import connectDB from './config/mongodb.js'        // Adjust path if needed
import 'dotenv/config'

// Paste your products array from assets.js here
const sampleProducts = [
  {
    name: "Women Zip-Front Relaxed Fit Jacket",
    description: "A lightweight pullover jacket with front zip closure.",
    price: 150,
    image: ["https://via.placeholder.com/150"], // Replace with Cloudinary URLs or local image paths
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    bestseller: true,
    date: Date.now()
  },
  {
    name: "Men Round Neck Pure Cotton T-shirt",
    description: "A lightweight, usually knitted, pullover shirt.",
    price: 110,
    image: ["https://via.placeholder.com/150"],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "XXL"],
    bestseller: true,
    date: Date.now()
  }
  // Add as many products as you want here
];

const seedProducts = async () => {
  try {
    await connectDB();
    
    // Optional: Clear existing database products before seeding
    // await productModel.deleteMany({});

    await productModel.insertMany(sampleProducts);
    console.log("✅ All products added successfully in bulk!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedProducts();