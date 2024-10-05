const mongoose = require('mongoose');

const questSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  tasks: [{ // Array of tasks to complete
    type: String,
    required: true,
  }],
  rewards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }], // Array of badge IDs as rewards
  isCompleted: {
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
questSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Quest = mongoose.model('Quest', questSchema);

module.exports = Quest;