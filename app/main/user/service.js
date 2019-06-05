const Boom = require('boom');

const Models = require('../../database/models/index');
const BaseService = require('../../base/BaseService');
const PasswordUtils = require('../../services/password');

class UserService extends BaseService {
  constructor() {
    super(Models.User);
  }

  async createOne(payload) {
    try {
      const { username } = payload;
      const checkUser = await Models.User.query().findOne({
        username
      });

      if (checkUser) {
        throw Boom.badRequest('Username is exist');
      }

      payload.password = await PasswordUtils.hash(payload.password);

      const user = await Models.User.query()
        .insert(payload)
        .returning('*');

      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
