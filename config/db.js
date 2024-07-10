const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' })

const connectDB = async () => {
   const connection = await mongoose.connect('mongodb://localhost:27017/ecommern',
      {
         useNewUrlParser: true,
         useUnifiedTopology: true
      }
   ) //process.env.MONGO_URI
   console.log(`MongoDB connected at: ${connection.connection.host}:${connection.connection.port}`)
}

module.exports = connectDB;