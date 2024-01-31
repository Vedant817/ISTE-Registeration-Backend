import mongoose from 'mongoose';

const connectDB = async ()=>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log(`\n MongoDB Connected!! DB Host: ${connection.connection.host}`);
    } catch (error) {
        console.log('MongoDB Connection Error', error);
        process.exit(1);
    }
}

export default connectDB;