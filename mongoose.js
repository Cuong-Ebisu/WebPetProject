import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://anhdungkf:vKjCBJSLDX9AoVRO@cluster0.omjtl.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0';

const ConnectDB = async () =>{
    try {
        const cnn = await mongoose.connect(mongoURI);
        console.log(`MongoDB Connected: ${cnn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); //1 code means error
    }
};

export {ConnectDB}
