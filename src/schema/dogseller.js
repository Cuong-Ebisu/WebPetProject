import mongoose from 'mongoose';

const dogSellerSchema = new mongoose.Schema({
  sellerID: {
    type: Number,
    required: true,
    unique: true
  },
  image: { type: String },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  breeds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DogBreed', // Tham chiếu đến bảng DogBreed
    required: true
  }],
  contactInfo: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Tự động thêm createdAt và updatedAt
});

export default dogSellerSchema;