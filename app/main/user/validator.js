const Joi = require('joi');
const BaseValidator = require('../../base/BaseValidator');

class UserValidator extends BaseValidator {
  constructor() {
    super();
    this.create = this.create();
    this.update = this.update();
  }

  create() {
    return {
      fullName: Joi.string().required(),
      username: super.strUsername().required(),
      password: super.strPassword().required(),
      roleId: Joi.number()
        .required()
        .default(3)
    };
  }

  update() {
    return {
      fullName: Joi.string(),
      roleId: Joi.number().default(3)
    };
  }
}

module.exports = UserValidator;
