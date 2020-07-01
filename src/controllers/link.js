const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  return res.jsonOK('Links');
})

router.post('/', async (req, res) => {
  const { label, url, isSocial } = req.body;

  

  return res.jsonOK('Rota create link');
})

module.exports = router;