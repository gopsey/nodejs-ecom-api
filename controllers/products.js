const productsList = [
   { id: 1, name: 'Product 1' },
   { id: 2, name: 'Product 2' },
   { id: 3, name: 'Product 3' },
   { id: 4, name: 'Product 4' },
]
const ProductModel = require('../models/Product')

// @desc Get Products list
// @route GET /api/v1/products
exports.getProducts = (req, res, next) => {
   ProductModel.find().then(products => {
      res.status(200).json({ success: true, data: products });
   })
   .catch(error => res.status(400).json({ success: false }));
}

// @desc Get Individual Product
// @route GET /api/v1/products/:id
exports.getProduct = (req, res, next) => {
   ProductModel.findById(req.params.id).then(product => {
      product
      ? res.status(200).json({ success: true, data: product })
      : res.status(400).json({ success: false })
   })
   .catch(error => res.status(400).json({ success: false }));
}

// @desc Add Product
// @route POST /api/v1/products
exports.addProduct = (req, res, next) => {
   ProductModel.create(req.body)
   .then(product => {
      res.status(201).json({ success: true, data: product });
   })
   .catch(error => res.status(400).json({ success: false }));
}

// @desc Update Individual Product
// @route PUT /api/v1/products/:id
exports.updateProduct = (req, res, next) => {
   res.status(200).json({ success: true, data: productsList });
}

// @desc Delete Individual Product
// @route DELETE /api/v1/products/:id
exports.deleteProduct = (req, res, next) => {
   res.status(200).json({ success: true, data: productsList });
}
