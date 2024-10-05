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
  age: {
    type: Number,
    required: true,
    min: 1
  },
  foods: {
    type: [{
      name: String,
      tags: {
        type: [String],
        enum: ['Grains', 'Fruits', 'Vegetables', 'Proteins', 'Dairy']
      },
      safeFood: Boolean
    }],
    default: []
  },
  stats: {
      GrainCount: Number,
      FruitCount: Number,
      VegetableCount: Number,
      ProteinCount: Number,
      DairyCount: Number
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;