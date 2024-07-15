const mongoose = require('mongoose');

const VariantSchema = new mongoose.Schema({
   skuId: { type: String, required: true },
   colorName: String,
   colorHexCode: String,
   sizeName: String,
   sizeCode: String,
   unitsCountInStock: { type: Number, min: 0 },
   maximumRetailPrice: { type: Number, min: 0 },
   currencyCode: String,
   discountPercent: { type: Number, min: 0, max: 100 },
})

const ProductFaqSchema = new mongoose.Schema({
   question: String,
   answer: String,
})

const ProductInformationSchema = new mongoose.Schema({
   productDescription: String,
   productFaqs: [ProductFaqSchema],
})

const ProductSchema = new mongoose.Schema({
   name: { type: String, required: true },
   defaultImage: String,
   rating: Number,
   productImages: [String],
   variants: { type: [VariantSchema], required: true },
   category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
   productInformationData: ProductInformationSchema,
   dateAdded: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Product', ProductSchema, 'products');