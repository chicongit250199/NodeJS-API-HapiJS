const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const Boom = require('boom');
const _ = require('lodash');

const Models = require('../../database/models');
const CONSTANTS = require('../../constants');

const secret = process.env.JWT_SECRET || 'enouvo123';
const saltRounds = process.env.SALT_ROUNDS || 10;

const createJwtToken = data =>
  jsonwebtoken.sign(
    _.assign(data, {
      ttl: Math.floor(Date.now() / 1000) - 60 * 60
    }),
    secret
  );

const register = async ({ username, password }) => {
  const hashPassword = await bcrypt.hash(password, saltRounds);
  const result = await Models.User.query().insertGraph({
    username,
    password: hashPassword,
    roleId: CONSTANTS.USER_ROLE.USER
  });
  result.scope = 'user';
  const data = _.pick(result, ['username', 'id', 'scope']);
  return _.assign({ token: createJwtToken(data) }, data);
};

const login = async ({ username, password }) => {
  const user = await Models.User.query()
    .findOne({ username })
    .joinRelation('role')
    .select('users.*', 'role.name as scope', 'users.password as hashPassword');
  if (!user) {
    return Boom.conflict('User is not found.');
  }
  if (!user.hashPassword) {
    return Boom.conflict('User can not login with email and password');
  }
  const isCorrectPassword = await bcrypt.compare(password, user.hashPassword);
  if (!isCorrectPassword) {
    return Boom.forbidden('Incorrect password');
  }
  const data = _.pick(user, ['username', 'id', 'scope']);
  return _.assign({ token: createJwtToken(data) }, data);
};

module.exports = {
  login,
  register
};
