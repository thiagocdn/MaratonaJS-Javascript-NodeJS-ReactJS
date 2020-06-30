const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');

const router = express.Router();
const saltRounds = 10;

router.get('/sign-up', async (req, res) => {

  const {email, password} = req.body;


  const hash = bcrypt.hashSync(password, saltRounds)

  // const result = await Account.create({ email, password: hash });

  return res.json({email, password});
});

module.exports = router;