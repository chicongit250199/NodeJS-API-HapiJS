const Joi = require('joi');

exports.register = {
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
};

exports.login = {
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
};
