const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
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
        enum: ['Grains', 'Fruits', 'Vegetables', 'Proteins', 'Dairy', 'Fats'],
        default: []
      },
      safeFood: Boolean
    }],
    default: []
  },
  stats: {
    type: {
      GrainsCount: Number,
      FruitsCount: Number,
      VegetablesCount: Number,
      ProteinsCount: Number,
      DairyCount: Number,
      FatsCount: Number
    },
    default: {
      GrainsCount: 0,
      FruitsCount: 0,
      VegetablesCount: 0,
      ProteinsCount: 0,
      DairyCount: 0,
      FatsCount: 0
    }
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;