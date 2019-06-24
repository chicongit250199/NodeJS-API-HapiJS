// const Models = require('../models');
const samples = require('./samples');

class Factory {
  static manager(num) {
    const data = [];
    data.push({
      username: 'admin',
      password: '123456',
      roleId: 1
    });
    for (let index = 0; index < num - 1; index += 1) {
      data.push(samples.createManager(2));
    }
    return data;
  }

  static engineer(num) {
    const data = [];
    for (let index = 0; index < num; index += 1) {
      data.push(samples.createEngineer());
    }
    return data;
  }
}

module.exports = Factory;
