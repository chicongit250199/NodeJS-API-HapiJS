const path = require('path');

const BASE_DB_PATH = path.join(__dirname, 'app', 'database');

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:123456@localhost:5432/BloodDonation',
    migrations: {
      directory: path.join(BASE_DB_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_DB_PATH, 'seeds')
    }
  },

  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(BASE_DB_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_DB_PATH, 'seeds')
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(BASE_DB_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_DB_PATH, 'seeds')
    }
  }
};
