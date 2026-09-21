import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("Database Connected Successfully");
        });

        // Connect to MongoDB using your environment variable configuration string
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
    } catch (error) {
        console.error("Database connection failure:", error.message);
        process.exit(1);
    }
};

export default connectDB;