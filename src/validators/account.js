const Joi = require('@hapi/joi');
const { getValidatorError } = require('../helpers/validators');


const accountSignUp = (req, res, next) => {
  const { email, password, password_confirmation } = req.body;

  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    password_confirmation: Joi.string().valid(Joi.ref('password')).required(),
  })
  
  const { error } = schema.validate(
    { email, password, password_confirmation },
    { abortEarly: false }
  );

  if(error){

    const message = getValidatorError(error, 'account.signup');

    return res.jsonBadRequest(null, null, { error: message });
  }


  next();
};

module.exports = { accountSignUp };