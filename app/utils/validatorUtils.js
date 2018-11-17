const Joi = require('joi');

function idNumber() {
  return Joi.number()
    .integer()
    .min(0);
}

function strEmail() {
  return Joi.string().email();
}

function strPhoneNumber() {
  return Joi.string().regex(/^[0-9+ ]{10,15}$/);
}

function strUsername() {
  return Joi.string()
    .min(3)
    .max(50)
    .alphanum();
}

function strPassword() {
  return Joi.string();
}

const queryParams = {
  limit: Joi.number()
    .min(1)
    .max(50)
    .default(10),
  offset: Joi.number().default(0),
  orderBy: Joi.string(),
  filter: Joi.string(),
  fields: Joi.string()
};

const checkToken = Joi.object({
  Authorization: Joi.string()
}).options({ allowUnknown: true });

module.exports = {
  idNumber,
  strPhoneNumber,
  strUsername,
  strPassword,
  strEmail,
  queryParams,
  checkToken
};
