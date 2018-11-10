const service = require('./service');

exports.index = async request => {
  try {
    /* eslint no-underscore-dangle: 0 */
    return request.i18n.__('ahihi');
  } catch (err) {
    throw err;
  }
};

exports.register = async request => {
  try {
    const { username, password } = request.payload;
    return await service.register({ username, password });
  } catch (err) {
    throw err;
  }
};

exports.login = async request => {
  try {
    const { username, password } = request.payload;
    return await service.login({ username, password });
  } catch (err) {
    throw err;
  }
};
