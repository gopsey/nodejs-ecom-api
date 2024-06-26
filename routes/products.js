const express = require('express');
const router = express.Router();
const {
   addProduct,
   deleteProduct,
   getProduct,
   getProducts,
   updateProduct,
} = require('../controllers/products');

router
   .route('/')
   .get(getProducts)
   .post(addProduct);

router
   .route('/:id').get(getProduct)
   .put(updateProduct)
   .delete(deleteProduct);

module.exports = router;