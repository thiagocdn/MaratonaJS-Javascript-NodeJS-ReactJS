const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  return res.jsonOK('Links');
})

module.exports = router;