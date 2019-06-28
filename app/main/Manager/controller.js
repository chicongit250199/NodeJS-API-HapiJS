const BaseController = require('../../base/BaseController');
const ManagerService = require('./service');

class ManagerController extends BaseController {
  constructor() {
    super(new ManagerService());
  }
}

module.exports = ManagerController;
