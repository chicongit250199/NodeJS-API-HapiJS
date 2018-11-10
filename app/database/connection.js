const pg = require('pg');

pg.types.setTypeParser(20, 'text', parseInt);
pg.types.setTypeParser(1700, 'text', parseInt);

const config = require('../../knexfile.js')[process.env.NODE_ENV];

module.exports = require('knex')(config);
