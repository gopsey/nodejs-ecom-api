const mongoose = require('mongoose');

const SizesSchema = new mongoose.Schema({
   sizeName: String,
   sizeCode: String,
   unitsCountInStock: { type: Number, min: 0 },
})

const VariantSchema = new mongoose.Schema({
   colorName: String,
   colorHexCode: String,
   sizes: { type: [SizesSchema], required: true },
   maximumRetailPrice: { type: Number, min: 0 },
   currencyCode: String,
   discountPercent: { type: Number, min: 0, max: 100 },
})

const ProductFaqSchema = new mongoose.Schema({
   question: String,
   answer: String,
}, { _id: false })

const ProductInformationSchema = new mongoose.Schema({
   productDescription: String,
   productFaqs: [ProductFaqSchema],
}, { _id: false })

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