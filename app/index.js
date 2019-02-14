/* eslint no-console: 0 */

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const hapiAuthJWT = require('hapi-auth-jwt2');
const Mrhorse = require('mrhorse');
const routes = require('./main/routes');

require('dotenv').config();

const server = new Hapi.Server({
  host: process.env.APP_HOST,
  port: process.env.APP_PORT,
  routes: {
    cors: true,
    validate: {
      failAction: async (request, h, err) => {
        if (process.env.NODE_ENV === 'production') {
          throw err;
        } else {
          console.error(err);
          throw err;
        }
      }
    }
  }
});

const validateUser = decoded => {
  if (decoded && decoded.id) {
    return { isValid: true };
  }

  return { isValid: false };
};

const apiVersionOptions = {
  basePath: '/api',
  validVersions: [1, 2],
  defaultVersion: 1,
  vendorName: 'api'
};

const swaggerOptions = {
  pathPrefixSize: 3,
  host: process.env.HOST,
  basePath: apiVersionOptions.basePath,
  info: {
    title: 'RESTful API base Documentation',
    description:
      'This is a U-COM API documentation.' +
      '\n' +
      '###Basic api query use for getAll resources. Only support normal query if need complex or advanced use cases(fulltextsearch, geolocation...) contact server developers to support more.' +
      '\n' +
      '###$ Paginate with limit and offset. \nEx: ?limit=5&offset=5\n' +
      '###$ Order by fields. \n Ex: ?order=age asc,name desc' +
      '\n' +
      '###$ Select field on query. \nEx: ?fields=["age","name"]' +
      '\n' +
      '###$ Filter equal \nEx: ?filter={"name": "ucom"}' +
      '\n' +
      '###$ Filter less than \nEx: ?filter={"age": {"$lt": 40}}' +
      '\n' +
      '###$ Filter greater than \nEx: ?filter={"age": {"$gt": 20}}' +
      '\n' +
      '###$ Filter less than and equal \nEx: ?filter={"age": {"$lte": 40}}' +
      '\n' +
      '###$ Filter greater than equal \nEx: ?filter={"age": {"$gte": 20}}' +
      '\n' +
      '###$ Filter field in many choice \nEx: ?filter={"name": {"$in": ["ucom", "MMMM"]}}' +
      '\n' +
      '###$ Filter array field is subset of parent array \nEx: ?filter={"tags": {"$all": ["JAV", "Lesbian"]}}' +
      '\n' +
      '###$ Filter field by text \nEx: ?filter={"name": {"$like": "%co%"}}' +
      '\n' +
      '###$ Filter field by text and no distinction between upper and lowercase letters \nEx: ?filter={"name": {"$likeLower": "%co%"}}' +
      '\n' +
      '###$ See more: https://github.com/longnt189/objection-filter'
  },
  deReference: false
};

process.on('uncaughtException', err => {
  console.log(err, 'Uncaught exception');
  process.exit(1);
});

async function start() {
  try {
    await server.register([
      Inert,
      Vision,
      {
        plugin: HapiSwagger,
        options: swaggerOptions
      },
      hapiAuthJWT,
      {
        plugin: Mrhorse,
        options: {
          policyDirectory: `${__dirname}/policies`
        }
      }
    ]);
    server.auth.strategy('jwt', 'jwt', {
      key: process.env.JWT_SECRET,
      validate: validateUser,
      verifyOptions: { ignoreExpiration: true }
    });

    server.auth.default('jwt');
    server.route(routes);
    await server.start();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Server running at: ', server.info.uri);
}

start();

module.exports = server;
