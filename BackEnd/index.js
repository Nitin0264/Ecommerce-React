import express from "express";
import cors from "cors";
import "dotenv/config"; 
import connectDB from "./config/mongodb.js"; 
import connectCloudinary from "./config/cloudinary.js";
import productRouter from "./routes/productRoutes.js"; 
import orderRouter from './routes/orderRoutes.js'; 
import userRouter from './routes/userRoutes.js';

// ── App Configuration ─────────────────────────────────────────────────
const app = express();
const port = process.env.PORT || 8000;

// ── Initialize External Database & Storage Connections ────────────────
connectDB();
connectCloudinary();

// ── Middlewares ───────────────────────────────────────────────────────
app.use(cors());
app.use(express.json()); 

// ── API Endpoints Routes ──────────────────────────────────────────────
app.use('/api/product', productRouter);
app.use('/api/user', userRouter);
app.use('/api/order', orderRouter);

// Base health check entry point route
app.get('/', (req, res) => {
    res.send("API Working smoothly!");
});

// ── Execution Entry Server Listener ───────────────────────────────────
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});