const service = require('./service');

exports.login = async request => {
  try {
    const { username, password } = request.payload;
    return await service.login({ username, password });
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
