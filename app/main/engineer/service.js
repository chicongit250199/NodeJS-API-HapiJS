// const Boom = require('boom');
const Models = require('../../database/models/index');
const BaseService = require('../../base/BaseService');
// const PasswordUtils = require('../../services/password');

class EngineerService extends BaseService {
  constructor() {
    super(Models.Engineer);
  }
}

module.exports = EngineerService;
