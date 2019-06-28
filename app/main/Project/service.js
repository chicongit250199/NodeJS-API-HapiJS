// const Boom = require('boom');
const Models = require('../../database/models/index');
const BaseService = require('../../base/BaseService');
// const PasswordUtils = require('../../services/password');

class projectService extends BaseService {
  constructor() {
    super(Models.Project);
  }
}

module.exports = projectService;
