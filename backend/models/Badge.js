const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  type: {
    type: String,
    enum: ['challenge', 'fear food eaten', 'food variety'],
    required: true,
  },
  criteria: String, // e.g., "Try 10 new foods"
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
badgeSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Badge = mongoose.model('Badge', badgeSchema);

module.exports = Badge;