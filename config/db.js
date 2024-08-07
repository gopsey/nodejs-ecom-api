const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' })

const connectDB = async () => {
   const connection = await mongoose.connect(process.env.MONGO_URI)
   console.log(`MongoDB connected at: ${connection.connection.host}:${connection.connection.port}`)
}

module.exports = connectDB;