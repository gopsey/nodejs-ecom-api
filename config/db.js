const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' })

const connectDB = async () => {
   //U: gopsey P: Y78yQBMNc2UHX4oy
   const connection = await mongoose.connect('mongodb+srv://gopsey:Y78yQBMNc2UHX4oy@clusterecommern.wlkbzaf.mongodb.net/ecommern?retryWrites=true&w=majority&appName=ClusterEcomMern') //process.env.MONGO_URI
   console.log(`MongoDB connected at: ${connection.connection.host}:${connection.connection.port}`)
}

module.exports = connectDB;