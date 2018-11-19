const bcrypt = require('bcrypt');
const Models = require('../models');
const { SALT_ROUNDS } = require('../../constants');

exports.seed = knex =>
  // Deletes ALL existing entries
  knex('users')
    .del()
    .then(() => knex('roles').del())
    .then(async () =>
      Models.Role.query().insertGraph([
        {
          name: 'superadmin',
          description: 'Admin has all the power'
        },
        {
          name: 'admin',
          description: 'Admin'
        },
        {
          name: 'user',
          description: 'The end user'
        }
      ])
    )
    .then(async roles =>
      Models.User.query().insertGraph([
        {
          fullName: 'Super Admin',
          username: 'superadmin',
          password: bcrypt.hashSync('codebase', SALT_ROUNDS),
          roleId: roles[0].id
        },
        {
          fullName: 'Admin',
          username: 'admin',
          password: bcrypt.hashSync('codebase', SALT_ROUNDS),
          roleId: roles[1].id
        },
        {
          fullName: 'User',
          username: 'user',
          password: bcrypt.hashSync('codebase', SALT_ROUNDS),
          roleId: roles[2].id
        }
      ])
    );
