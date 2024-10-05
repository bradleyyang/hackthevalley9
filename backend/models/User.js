const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  ageGroup: {
    type: String,
    enum: ['teen', 'adult'],
    required: true,
  },
  animalBuddy: String, // Animal buddy for the user
  safeFoods: [String], // Array of safe food names
  fearFoods: [String], // Array of fear food names
  badges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }], // Array of badge IDs
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
userSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;