const mongoose = require('../mongoose');

const spaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  location: {
      province: { type: String },
      district: { type: String },
      ward: { type: String },
      street: { type: String }
  },
  services: [{ type: String }],
  contactInfo: {
      phone: { type: String },
      email: { type: String }
  }
});

module.exports = spaSchema;