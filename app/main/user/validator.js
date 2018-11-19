const Joi = require('joi');
const { idNumber, queryParams, strUsername, strPassword } = require('../../utils/validatorUtils');

exports.queryParams = queryParams;

exports.idParam = idNumber()
  .required()
  .description('id is required');

exports.createUser = {
  fullName: Joi.string().required(),
  username: strUsername().required(),
  password: strPassword().required(),
  roleId: Joi.number()
    .required()
    .default(3)
};

exports.updateUser = {
  fullName: Joi.string(),
  password: strPassword(),
  roleId: Joi.number().default(3)
};
