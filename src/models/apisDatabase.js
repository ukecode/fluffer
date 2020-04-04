const mongoose = require('../database/index');

const userSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Api = mongoose.model('Api', userSchema);

module.exports = Api;
