const service = require('./service');

exports.getMany = async request => {
  try {
    return await service.getAllUser(request.query);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

exports.getOne = async request => {
  try {
    const { id } = request.params;
    return await service.getOneUser(id);
  } catch (error) {
    throw error;
  }
};

exports.createOne = async request => {
  try {
    const { payload } = request;
    return await service.createUser(payload);
  } catch (error) {
    throw error;
  }
};

exports.updateOne = async request => {
  try {
    const { params, payload } = request;
    const { id } = params;
    return await service.updateUser(id, payload);
  } catch (error) {
    throw error;
  }
};

exports.deleteOne = async request => {
  try {
    const { id } = request.params;
    return await service.deleteUser(id);
  } catch (error) {
    throw error;
  }
};
