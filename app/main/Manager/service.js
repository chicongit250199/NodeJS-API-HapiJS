// const Boom = require('boom');
const Models = require('../../database/models/index');
const BaseService = require('../../base/BaseService');
// const PasswordUtils = require('../../services/password');

class ManagerService extends BaseService {
  constructor() {
    super(Models.Manager);
  }
}

module.exports = ManagerService;
