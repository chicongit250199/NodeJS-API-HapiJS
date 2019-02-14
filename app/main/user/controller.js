const service = require('./service');

exports.getMany = async request => {
  try {
    return await service.getMany(request.query);
  } catch (error) {
    throw error;
  }
};

exports.getOne = async request => {
  try {
    const { id } = request.params;
    return await service.getOne(id);
  } catch (error) {
    throw error;
  }
};

exports.createOne = async request => {
  try {
    const { payload } = request;
    return await service.createOne(payload);
  } catch (error) {
    throw error;
  }
};

exports.updateOne = async request => {
  try {
    const { params, payload } = request;
    const { id } = params;
    return await service.updateOne(id, payload);
  } catch (error) {
    throw error;
  }
};

exports.deleteOne = async request => {
  try {
    const { id } = request.params;
    return await service.deleteOne(id);
  } catch (error) {
    throw error;
  }
};
