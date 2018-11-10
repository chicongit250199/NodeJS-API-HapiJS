const Joi = require('joi');

const Validator = {
  register: Joi.object()
    .keys({
      username: Joi.string()
        .required()
        .trim()
        .label('Username')
        .error(new Error('Please enter your username!')),
      password: Joi.string()
        .required()
        .trim()
        .label('Password')
        .error(new Error('Please enter your password!'))
    })
    .options({
      allowUnknown: true
    }),

  login: Joi.object()
    .keys({
      username: Joi.string()
        .required()
        .trim()
        .label('Username')
        .error(new Error('Please enter your username!')),
      password: Joi.string()
        .required()
        .trim()
        .label('Password')
        .error(new Error('Please enter your password!'))
    })
    .options({
      allowUnknown: true
    })
};

module.exports = Validator;
