const Boom = require('boom');
const bcrypt = require('bcrypt');
const Models = require('../../database/models');
const { SALT_ROUNDS } = require('../../constants');

exports.getAllUser = async query => Models.User.queryBuilder(query);

exports.getOneUser = async id => {
  try {
    const result = await Models.User.query().findById(id);
    if (!result) {
      throw Boom.notFound('User not found');
    }

    return result;
  } catch (error) {
    throw error;
  }
};

exports.createUser = async body => {
  try {
    const { email, username } = body;
    const checkUsername = await Models.User.query().findOne({
      username
    });

    if (checkUsername) {
      throw Boom.badRequest('Username is exist');
    }

    const checkEmail = await Models.User.query().findOne({
      email
    });
    if (checkEmail) {
      throw Boom.badRequest('Email is exist');
    }

    body.password = await bcrypt.hash(body.password, SALT_ROUNDS);

    const user = await Models.User.query()
      .insert(body)
      .returning('*');

    return user;
  } catch (error) {
    throw error;
  }
};

exports.updateUser = async (id, body) => {
  try {
    if (body.password) {
      body.password = await bcrypt.hash(body.password, SALT_ROUNDS);
    }

    const result = await Models.User.query().patchAndFetchById(id, body);
    if (!result) {
      throw Boom.notFound('User not found');
    }

    return result;
  } catch (error) {
    throw error;
  }
};

exports.deleteUser = async id => {
  try {
    const result = await Models.User.query().patchAndFetchById(id, { isDisabled: true });
    if (!result) {
      throw Boom.notFound('User not found');
    }

    return result;
  } catch (error) {
    throw error;
  }
};
