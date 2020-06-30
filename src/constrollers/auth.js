const express = require('express');

const router = express.Router();

router.get('/bla', (req, res) => {
  return res.json('Api running...');
});

module.exports = router;