const Joi = require('joi');
const BaseValidator = require('../../base/BaseValidator');

class TeamValidator extends BaseValidator {
  constructor() {
    super();
    this.create = this.create();
    this.update = this.update();
  }

  create() {
    return {
      name: Joi.string().required(),
     projectId: Joi.string().required(),
     
    };
  }

  update() {
    return {
      name: Joi.string().required(),
      projectId: Joi.string().required(),
      deleteAt: Joi.date().required()
    };
  }
}

module.exports = TeamValidator;
