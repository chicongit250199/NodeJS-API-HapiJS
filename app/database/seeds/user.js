const bcrypt = require('bcrypt');

const Models = require('../models');

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
          email: 'superadmin@danaqueue.com',
          username: 'superadmin',
          password: bcrypt.hashSync('enouvo123', 5),
          fullName: 'Super Admin',
          roleId: roles[0].id
        },
        {
          email: 'admin@danaqueue.com',
          username: 'admin',
          password: bcrypt.hashSync('enouvo123', 5),
          fullName: 'Admin',
          roleId: roles[1].id
        },
        {
          email: 'user@danaqueue.com',
          fullName: 'User',
          roleId: roles[2].id
        }
      ])
    );
