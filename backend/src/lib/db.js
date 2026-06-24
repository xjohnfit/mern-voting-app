import mongoose from 'mongoose';

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return; // Already connected or connecting

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI environment variable is not defined');
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};
