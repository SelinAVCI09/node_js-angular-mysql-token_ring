const express = require('express');
const router = express.Router();
const checkToken = require('../controllers/checkToken');

router.get('/userinfo', checkToken, (req, res) => {
  res.status(200).send({ id: req.userId, username: 'exampleUser' });
});

module.exports = router;
