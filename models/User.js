const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String, // Şifre hashlenmiş olmalı
    age: Number,
    gender: String,
    height_cm: Number,
    weight_kg: Number,
    goals: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', userSchema);
