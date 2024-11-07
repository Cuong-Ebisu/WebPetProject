import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  product: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true 
  },
  quantity: { type: Number, required: true }
});

export default orderItemSchema;