const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Kullanıcı oluştur
router.post('/register', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: 'Kullanıcı kaydedildi', user: newUser });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Tüm kullanıcıları getir
router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

module.exports = router;
