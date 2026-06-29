import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true }, // This will hold our array of Cloudinary image URLs
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },  // e.g., ["S", "M", "XL"]
    bestseller: { type: Boolean },
    date: { type: Number, required: true }  // Timestamps for sorting or tracking creation
});

// If the model already exists in Mongoose's internal registry, use it; otherwise, initialize it.
const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;