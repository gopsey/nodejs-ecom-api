const express = require('express');
const router = express.Router();
const {
   addProduct,
   deleteProduct,
   getProduct,
   getProducts,
   updateProduct,
   getNewArrivals,
   getSkuProduct,
} = require('../controllers/products');

router
   .route('/')
   .get(getProducts)
   .post(addProduct);

router
   .route('/new-arrivals')
   .get(getNewArrivals);

router
   .route('/:id').get(getProduct)
   .put(updateProduct)
   .delete(deleteProduct);

router
   .route('/:id/:skuId').get(getSkuProduct);

module.exports = router;