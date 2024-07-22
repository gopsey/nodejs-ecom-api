const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
   name: String,
   image: String,
})

module.exports = mongoose.model('Category', CategorySchema, 'categories');