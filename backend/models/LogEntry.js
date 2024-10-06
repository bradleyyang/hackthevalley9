const mongoose = require('mongoose')

const logEntrySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    food: {
        type: {
            name: {
                type: String,
                required: true
            },
            tags: {
                type: [String],
                enum: ['Grains', 'Fruits', 'Vegetables', 'Proteins', 'Dairy', 'Fats'],
                required: true
            },
        },
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;