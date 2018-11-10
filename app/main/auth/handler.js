const controller = require('./controller');
const validator = require('./validator');

const Handler = {
  login: {
    description: 'Login',
    notes: 'Login',
    tags: ['api', 'v1'],
    handler: controller.login,
    auth: false,
    validate: {
      payload: validator.login
    }
  },
  register: {
    description: 'Register',
    notes: 'Register',
    tags: ['api', 'v1'],
    handler: controller.register,
    auth: false,
    validate: {
      payload: validator.register
    }
  }
};

module.exports = Handler;
