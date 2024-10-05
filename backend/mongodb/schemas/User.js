const mongoose = require('mongoose');
// Define a Mongoose schema and model
const UserSchema = new mongoose.Schema({
    spotifyId: {
        type: String,
        required: true,
        unique: true,
    },
    displayName: { type: String },
    refreshToken: { type: String, required: true },
    accessToken: { type: String },
    uri: { type: String, required: true, unique: true},
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema)
