const express = require('express');
const router = express.Router();
const {
   getCategories,
   addCategory,
} = require('../controllers/categories');
const { getProductsByCategory } = require('../controllers/products');

router
   .route('/')
   .get(getCategories)
   .post(addCategory)

router
   .route('/productsBy/:category')
   .get(getProductsByCategory);

module.exports = router;