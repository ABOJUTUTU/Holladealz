const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String, required: true }], // Array of image URLs
  colors: [{ type: String }], // Array of color names
  stock: { type: Number, required: true, default: 10 },
  featured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);