const Joi = require('joi');
const {
  idNumber,
  queryParams,
  strUsername,
  strEmail,
  strPassword
} = require('../../utils/validatorUtils');

exports.queryParams = queryParams;

exports.idParam = idNumber()
  .required()
  .description('id is required');

exports.createUser = {
  fullName: Joi.string().required(),
  username: strUsername().required(),
  email: strEmail().required(),
  password: strPassword().required(),
  roleId: Joi.number().required(),
  isDisabled: Joi.boolean()
};

exports.updateUser = {
  fullName: Joi.string().required(),
  username: strUsername().required(),
  email: strEmail().required(),
  password: strPassword().required(),
  roleId: Joi.number().required(),
  isDisabled: Joi.boolean()
};
