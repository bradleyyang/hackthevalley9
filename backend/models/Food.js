const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: ['fruit', 'vegetable', 'protein', 'grain', 'dairy', 'snack'],
    required: true,
  },
  isFearFood: {
    type: Boolean,
    default: false,
  },
  isSafeFood: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt field before saving a document
foodSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;