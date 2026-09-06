const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  productName: { type: String, required: true },
  customerName: { type: String, required: true },
  phone: { type: String, default: '' },
  whatsapp: { type: String, default: '' },
  email: { type: String, default: '' },
  address: { type: String, default: '' },
  city: { type: String, default: '' },
  landmark: { type: String, default: '' },
  quantity: { type: Number, default: 1 },
  color: { type: String, required: true },
  status: { type: String, enum: ['pending', 'processing', 'completed', 'cancelled'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);