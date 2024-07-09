const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errors');
const cors = require("cors");

// Importing Route files
const products = require('./routes/products');
const testimonials = require('./routes/testimonials');

//Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const ENVIRONMENT = process.env.NODE_ENV;

// Load environment variables
dotenv.config({ path: './config/config.env' })

// To access request body of POST
app.use(express.json());
app.use(cors());
app.use('/api/v1/products', products)
app.use('/api/v1/testimonials', testimonials)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running in ${ENVIRONMENT} on port: ${PORT}`))
