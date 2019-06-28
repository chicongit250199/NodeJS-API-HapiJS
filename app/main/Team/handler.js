const TeamController = require('./controller');
const TeamValidator = require('./validator');

const controller = new TeamController();
const validator = new TeamValidator();

exports.getMany = {
  description: 'Get Team list',
  notes: 'Return ',
  tags: ['api', 'v1'],
  handler: controller.getMany.bind(controller),
  auth: false,
  validate: {
    query: validator.queryParams
  }
};

exports.getOne = {
  description: 'Get a Teams',
  notes: 'Return a team',
  tags: ['api', 'v1'],
  handler: controller.getOne.bind(controller),
  auth: false,
  validate: {
    params: {
      id: validator.idParam
    }
  }
};

exports.createOne = {
  description: 'Create a new Team',
  notes: 'Return created team',
  tags: ['api', 'v1'],
  handler: controller.createOne.bind(controller),
  auth: false,
  validate: {
    payload: validator.create
  }
};

exports.updateOne = {
  description: 'Update Engineer',
  notes: 'Return updated team by id',
  tags: ['api', 'v1'],
  handler: controller.updateOne.bind(controller),
  auth: false,
  validate: {
    params: {
      id: validator.idParam
    },
    payload: validator.update
  }
};

exports.deleteOne = {
  description: 'Delete a team',
  notes: 'Return deleted team by id',
  tags: ['api', 'v1'],
  handler: controller.deleteOne.bind(controller),
  auth: false,
  validate: {
    params: {
      id: validator.idParam
    }
  }
};
