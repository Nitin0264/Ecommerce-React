import express from "express";
import cors from "cors";
import "dotenv/config"; // Replaces import dotenv from "dotenv" to instantly auto-load .env files
import connectDB from "./config/mongodb.js"; // Assume you have a simple mongoose connection function here
import connectCloudinary from "./config/cloudinary.js";
import productRouter from "./routes/productRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 8000;

// Initialize External Connections
connectDB();
connectCloudinary();

// Middlewares
app.use(cors());
app.use(express.json());

// API Endpoints
app.use('/api/product', productRouter);

app.get('/', (req, res) => {
    res.send("API Working smoothly!");
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});