const controller = require('./controller');
const validator = require('./validator');

exports.getMany = {
  description: 'Get User list',
  notes: 'Return User items',
  tags: ['api', 'v1'],
  handler: controller.getMany,
  auth: false,
  validate: {
    query: validator.queryParams
  }
};

exports.getOne = {
  description: 'Get a User',
  notes: 'Return a User by id',
  tags: ['api', 'v1'],
  handler: controller.getOne,
  auth: false,
  validate: {
    params: {
      id: validator.idParam
    }
  }
};

exports.createOne = {
  description: 'Create a new User',
  notes: 'Return created User',
  tags: ['api', 'v1'],
  handler: controller.createOne,
  auth: false,
  validate: {
    payload: validator.createUser
  }
};

exports.updateOne = {
  description: 'Update User',
  notes: 'Return updated User by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne,
  auth: false,
  validate: {
    params: {
      id: validator.idParam
    },
    payload: validator.updateUser
  }
};

exports.deleteOne = {
  description: 'Delete a User',
  notes: 'Return deleted User by id',
  tags: ['api', 'v1'],
  handler: controller.deleteOne,
  auth: false,
  validate: {
    params: {
      id: validator.idParam
    }
  }
};
