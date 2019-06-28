const Joi = require('joi');
const BaseValidator = require('../../base/BaseValidator');

class ManagerValidator extends BaseValidator {
  constructor() {
    super();
    this.create = this.create();
    this.update = this.update();
  }

  create() {
    return {

      username: Joi.string().required(),
      password: Joi.string().required(),
      roleId: Joi.string().required()
      
    };
  }

  update() {
    return {
      username: Joi.string().required(),
      password: Joi.string().required(),
      roleId: Joi.string().required()
    };
  }
}

module.exports = ManagerValidator;
