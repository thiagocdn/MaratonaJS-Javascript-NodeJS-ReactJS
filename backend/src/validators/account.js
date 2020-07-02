const Joi = require('@hapi/joi');
const { getValidatorError } = require('../helpers/validators');


const rules = {
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  password_confirmation: Joi.string().valid(Joi.ref('password')).required(),
};

const options = { abortEarly: false };


const accountSignIn = (req, res, next) => {
  const { email, password } = req.body;

  const schema = Joi.object({
    email: rules.email,
    password: rules.password,
  })
  
  const { error } = schema.validate({ email, password }, options);

  if(error){
    const message = getValidatorError(error, 'account.signin');
    return res.jsonBadRequest(null, null, { error: message });
  }

  next();
};


const accountSignUp = (req, res, next) => {
  const { email, password, password_confirmation } = req.body;

  const schema = Joi.object({
    email: rules.email,
    password: rules.password,
    password_confirmation: rules.password_confirmation,
  })
  
  const { error } = schema.validate(
    { email, password, password_confirmation },
    options,
  );

  if(error){
    const message = getValidatorError(error, 'account.signup');
    return res.jsonBadRequest(null, null, { error: message });
  }

  next();
};

module.exports = { accountSignUp, accountSignIn };