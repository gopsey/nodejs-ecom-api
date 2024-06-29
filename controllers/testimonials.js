const TestimonialModel = require('../models/Testimonial')
const ErrorResponse = require('../utils/errorResponse')

// @desc Get Testimonials list
// @route GET /api/v1/testimonials
exports.getTestimonials = (req, res, next) => {
   TestimonialModel.find().then(testimonials => {
      testimonials
         ? res.status(200).json({ success: true, data: testimonials })
         : next(new ErrorResponse('No testimonials found', 404))
   })
      .catch(error => next(error));
}

// @desc Add Testimonial
// @route POST /api/v1/testimonials
exports.addTestimonial = (req, res, next) => {
   TestimonialModel.create(req.body)
      .then(testimonial => {
         res.status(201).json({ success: true, data: testimonial });
      })
      .catch(error => next(error));
}