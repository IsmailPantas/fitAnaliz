const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json());

// MongoDB Atlas bağlantısı (örnek bağlantı URI)
mongoose.connect('mongodb+srv://<username>:<password>@cluster.mongodb.net/fitApp')
    .then(() => console.log('MongoDB bağlantısı başarılı'))
    .catch(err => console.error('MongoDB bağlantı hatası:', err));

// Routes
app.use('/api/users', userRoutes);

// Sunucuyu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
