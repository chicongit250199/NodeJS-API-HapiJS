const BaseController = require('../../base/BaseController');
const UserService = require('./service');

class UserController extends BaseController {
  constructor() {
    super(new UserService());
  }
}

module.exports = UserController;
