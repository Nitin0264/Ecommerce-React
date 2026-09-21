import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }
}, { minimize: false }); // minimize: false ensures empty cart objects are saved explicitly

// Use existing model if already compiled, otherwise define a new model
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;