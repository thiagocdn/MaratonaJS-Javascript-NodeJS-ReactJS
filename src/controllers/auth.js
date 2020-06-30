const express = require('express');
const bcrypt = require('bcrypt');
const { Account } = require('../models');
const { accountSignUp } = require('../validators/account');
const { getMessage } = require('../helpers/messages');
const { generateJwt, generateRefreshJwt } = require('../helpers/jwt');
const account = require('../validators/account');

const router = express.Router();
const saltRounds = 10;

router.get('/sign-up', accountSignUp, async (req, res) => {

  const {email, password} = req.body;

  const checkEmail = await Account.findOne({ where: { email }});

  if (checkEmail) {
    return res.jsonBadRequest(getMessage('account.signup.email_exists'));
  }


  const hash = bcrypt.hashSync(password, saltRounds)

  const newAccount = await Account.create({ email, password: hash });

  const token = generateJwt({id: newAccount.id});
  const refreshToken = generateRefreshJwt({id: newAccount.id});

  return res.jsonOK(newAccount, getMessage('account.signup.success'), { token, refreshToken });
});

module.exports = router;