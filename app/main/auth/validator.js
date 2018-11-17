const Joi = require('joi');

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

exports.register = {
  fullName: Joi.string()
    .required()
    .label('FullName')
    .error(new Error('Please enter your fullName!')),
  email: Joi.string()
    .required()
    .label('Email')
    .error(new Error('Please enter your email!')),
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
