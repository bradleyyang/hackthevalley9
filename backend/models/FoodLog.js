const mongoose = require('mongoose');

const foodLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true }, // Reference to the food
  date: {
    type: Date,
    default: Date.now,
  },
  isFearFoodEaten: {
    type: Boolean,
    default: false, // Indicates if a fear food was consumed
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
foodLogSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const FoodLog = mongoose.model('FoodLog', foodLogSchema);

module.exports = FoodLog;