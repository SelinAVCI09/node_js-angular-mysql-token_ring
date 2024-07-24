const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db'); // Veritabanı bağlantı dosyasını import edin

// Kullanıcı kaydı
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Eksik parametre kontrolü
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Kullanıcı adı veya email kontrolü
    const query = 'SELECT * FROM users WHERE username = ? OR email = ?';
    const [existingUser] = await db.promise().query(query, [username, email]);
    
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    // Şifreyi hash'le
    const hashedPassword = await bcrypt.hash(password, 10);

    // Yeni kullanıcı oluştur
    const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    await db.promise().query(insertQuery, [username, email, hashedPassword]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Kullanıcı girişi
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Eksik parametre kontrolü
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const query = 'SELECT * FROM users WHERE username = ?';
    const [users] = await db.promise().query(query, [username]);

    if (users.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = users[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, 'your_jwt_secret');
    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
