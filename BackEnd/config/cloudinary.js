import { v2 as cloudinary } from 'cloudinary';

const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY || process.env.CLOUDINARY_API_SECRET
    });

    // Logging credentials on boot to verify dotenv loading (masked for security)
    console.log("Cloudinary Configured -> Cloud Name:", process.env.CLOUDINARY_NAME, "| API Key Loaded:", !!process.env.CLOUDINARY_API_KEY);
};

export default connectCloudinary;