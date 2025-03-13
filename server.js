const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load .env file
dotenv.config();



mongoose.connect(process.env.MONGO_ENV)
  .then(() => {
    console.log("MongoDB is connected successfully");
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });
