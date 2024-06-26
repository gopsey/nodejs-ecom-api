const http = require('http');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' })

const app = express();
const PORT = process.env.PORT || 5000;
const ENVIRONMENT = process.env.NODE_ENV;

app.listen(PORT, () => console.log(`Server running in ${ENVIRONMENT} on port: ${PORT}`))

const productsList = [
   {id: 1, name: 'Product 1'},
   {id: 2, name: 'Product 2'},
   {id: 3, name: 'Product 3'},
   {id: 4, name: 'Product 4'},
]
