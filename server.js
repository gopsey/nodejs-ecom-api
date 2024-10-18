const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errors');
const cors = require("cors");

// Importing Route files
const products = require('./routes/products');
const testimonials = require('./routes/testimonials');
const categories = require('./routes/categories');
const users = require('./routes/users');

// Load environment variables
dotenv.config({ path: './config/config.env' })

//Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const ENVIRONMENT = process.env.NODE_ENV;

// To access request body of POST
app.use(express.json());
app.use(cors());
app.use(['/api/v1/products', '/api/v1/products/new-arrivals'], products)
app.use('/api/v1/testimonials', testimonials)
app.use(['/api/v1/categories', '/api/v1/categories/productsBy'], categories)
app.use(['/api/v1/signup'], users)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running in ${ENVIRONMENT} on port: ${PORT}`))
