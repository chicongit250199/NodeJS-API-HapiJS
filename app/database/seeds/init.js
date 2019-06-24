// const bcrypt = require('bcrypt');
const Models = require('../models');
// const { SALT_ROUNDS } = require('../../constants');
const Factory = require('../factory');

exports.seed = knex =>
  // Deletes ALL existing entries
  knex('managers')
    .del()
    .then(() => knex('roles').del())
    .then(async () =>
      Models.Role.query().insertGraph([
        {
          name: 'superadmin',
          description: 'Admin with highest AUTHORITY'
        },
        {
          name: 'admin',
          description: 'Admin'
        }
      ])
    )
    .then(() => Models.Manager.query().insertGraph(Factory.manager(5)))
    .then(() => Models.Engineer.query().insertGraph(Factory.engineer(200)));
