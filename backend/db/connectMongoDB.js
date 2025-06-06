// filepath: c:\Users\Bejugam Nagendra\OneDrive\Desktop\twitter-clone\backend\db\connectMongoDB.js
import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        throw error;
    }
};

export default connectMongoDB;