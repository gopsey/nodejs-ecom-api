const ProductModel = require('../models/Product')
const ErrorResponse = require('../utils/errorResponse')

// @desc Get Products list
// @route GET /api/v1/products
exports.getProducts = (req, res, next) => {
   ProductModel.find().then(products => {
      res.status(200).json({ success: true, data: products });
   })
      .catch(error => next(error));
}

// @desc Get Individual Product
// @route GET /api/v1/products/:id
exports.getProduct = (req, res, next) => {
   ProductModel.findById(req.params.id).then(product => {
      product
         ? res.status(200).json({ success: true, data: product })
         : next(new ErrorResponse(`No product found with ID: ${req.params.id}`, 404))
   })
      .catch(error => next(error));
}

// @desc Add Product
// @route POST /api/v1/products
exports.addProduct = (req, res, next) => {
   ProductModel.create(req.body)
      .then(product => {
         res.status(201).json({ success: true, data: product });
      })
      .catch(error => next(error));
}

// @desc Update Individual Product
// @route PUT /api/v1/products/:id
exports.updateProduct = (req, res, next) => {
   ProductModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
   }).then(product => {
      product
         ? res.status(200).json({ success: true, data: product })
         : next(new ErrorResponse(`No product found with ID: ${req.params.id}`, 404))
   })
      .catch(error => next(error));
}

// @desc Delete Individual Product
// @route DELETE /api/v1/products/:id
exports.deleteProduct = (req, res, next) => {
   ProductModel.findByIdAndDelete(req.params.id).then(product => {
      product
         ? res.status(200).json({ success: true, data: product })
         : next(new ErrorResponse(`No product found with ID: ${req.params.id}`, 404))
   })
      .catch(error => next(error));
}

// @desc Get New Arrivals list
// @route GET /api/v1/new-arrivals
exports.getNewArrivals = (req, res, next) => {
   ProductModel.find().sort({ dateAdded: -1 }).limit(4).then(products => {
      res.status(200).json({ success: true, data: products });
   })
      .catch(error => next(error));
}

// @desc Get Individual Product skuId
// @route GET /api/v1/products/:id/:skuId
exports.getSkuProduct = (req, res, next) => {
   ProductModel.findById(req.params.id).then(product => {
      const variant = product.variants.find(variant => variant.skuId === req.params.skuId)
      product
         ? res.status(200).json({ success: true, data: variant })
         : next(new ErrorResponse(`No product found with ID: ${req.params.id}`, 404))
   })
      .catch(error => next(error));
}

// @desc Get Products by category
// @desc Added this endpoint here in products controller and not under categories controller since this requires to access ProductModel
// @route GET /api/v1/categories/productsBy/:category
exports.getProductsByCategory = (req, res, next) => {
   const category = req.params.category;
   ProductModel.find({ category }).then(products => {
      res.status(200).json({ success: true, data: products });
   })
      .catch(error => next(error));
}