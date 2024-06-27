const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
   id: Number,
   name: String,
})

module.exports = mongoose.model('Product', ProductSchema, 'productmodels');