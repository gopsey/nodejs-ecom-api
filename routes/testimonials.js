const express = require('express');
const router = express.Router();
const {
   getTestimonials,
   addTestimonial,
} = require('../controllers/testimonials');

router
   .route('/')
   .get(getTestimonials)
   .post(addTestimonial)

module.exports = router;