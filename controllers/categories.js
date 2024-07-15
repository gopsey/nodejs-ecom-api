const CategoryModel = require('../models/Category')
const ErrorResponse = require('../utils/errorResponse')

// @desc Get Categories list
// @route GET /api/v1/categories
exports.getCategories = (req, res, next) => {
   CategoryModel.find().then(categories => {
      categories
         ? res.status(200).json({ success: true, data: categories })
         : next(new ErrorResponse('No categories found', 404))
   })
      .catch(error => next(error));
}

// @desc Add Category
// @route POST /api/v1/categories
exports.addCategory = (req, res, next) => {
   console.log('request: ', req)
   CategoryModel.create(req.body)
      .then(category => {
         res.status(201).json({ success: true, data: category });
      })
      .catch(error => next(error));
}