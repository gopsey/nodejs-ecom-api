const express = require('express');
const router = express.Router();
const {
   getCategories,
   addCategory,
} = require('../controllers/categories');

router
   .route('/')
   .get(getCategories)
   .post(addCategory)

module.exports = router;