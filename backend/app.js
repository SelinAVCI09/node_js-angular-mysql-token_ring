const express = require('express');
const cors = require('cors');
const app = express();
const port = 4002;

const db = require('./config/db'); // Veritabanı bağlantı dosyasını import edin

// CORS ayarları
app.use(cors({
  origin: 'http://localhost:4200', // Angular uygulamanızın çalıştığı adres
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Diğer middleware ve rotalar
app.use(express.json());

// Rotalar
const authRoutes = require('./routes/authentication');
app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
