const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Veritabanı bağlantı dosyanızı içe aktarın

// Kullanıcının buton tıklama istatistiklerini getir
router.get('/button-stats/:userId', (req, res) => {
  const { userId } = req.params;

  db.query('SELECT * FROM button_stats WHERE user_id = ?', [userId], (error, results) => {
    if (error) {
      console.error('Error fetching button stats:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.json(results);
  });
});

module.exports = router;
