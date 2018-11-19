const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../../app/constants');

const data = [
  {
    fullName: 'Super Admin',
    username: 'superadmin',
    email: 'superadmin@danaqueue.com',
    password: bcrypt.hashSync('danaqueue', SALT_ROUNDS),
    roleId: 1
  },
  {
    fullName: 'Admin',
    username: 'admin',
    email: 'admin@danaqueue.com',
    password: bcrypt.hashSync('danaqueue', SALT_ROUNDS),
    roleId: 2
  },
  {
    fullName: 'User',
    username: 'user',
    email: 'user@danaqueue.com',
    password: bcrypt.hashSync('danaqueue', SALT_ROUNDS),
    roleId: 3
  }
];

module.exports = data;
