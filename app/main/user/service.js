const Boom = require('boom');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const Models = require('../../database/models');
const { SALT_ROUNDS } = require('../../constants');

exports.getMany = async query => Models.User.queryBuilder(query);

exports.getOne = async id => {
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

exports.createOne = async body => {
  try {
    const { username } = body;
    const checkUser = await Models.User.query().findOne({
      username
    });

    if (checkUser) {
      throw Boom.badRequest('Username is exist');
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

exports.updateOne = async (id, body) => {
  try {
    if (body.password) {
      body.password = await bcrypt.hash(body.password, SALT_ROUNDS);
    }

    const fields = _.keys(body);
    const result = await Models.User.query()
      .patchAndFetchById(id, body)
      .then(user =>
        Models.User.query()
          .findById(user.id)
          .select(['id', ...fields])
      );

    if (!result) {
      throw Boom.notFound('User not found');
    }

    return result;
  } catch (error) {
    throw error;
  }
};

exports.deleteOne = async id => {
  try {
    const result = await Models.User.query()
      .patchAndFetchById(id, { isDisabled: true })
      .then(user =>
        Models.User.query()
          .findById(user.id)
          .select(['id', 'isDisabled'])
      );

    if (!result) {
      throw Boom.notFound('User not found');
    }

    return result;
  } catch (error) {
    throw error;
  }
};
