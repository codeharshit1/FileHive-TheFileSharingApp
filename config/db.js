require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_URL);
    console.log('✅ Database Connected');
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
  }
};

module.exports = connectDB;
