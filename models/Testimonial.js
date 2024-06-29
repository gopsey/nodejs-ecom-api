const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
   id: Number,
   rating: Number,
   reviewerName: String,
   testimonyText: String,
   isVerified: Boolean,
})

module.exports = mongoose.model('Testimonial', TestimonialSchema, 'testimonials');