const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false // Set to true for admin users
    }
});

module.exports = mongoose.model('User', userSchema);
