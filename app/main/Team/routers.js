const Handler = require('./handler');

const Routes = [
  {
    method: 'GET',
    path: '/api/v1/Team',
    config: Handler.getMany
  },
  {
    method: 'GET',
    path: '/api/v1/Team/{id}',
    config: Handler.getOne
  },
  {
    method: 'POST',
    path: '/api/v1/Team',
    config: Handler.createOne
  },
  {
    method: 'PUT',
    path: '/api/v1/Team/{id}',
    config: Handler.updateOne
  },
  {
    method: 'DELETE',
    path: '/api/v1/Team/{id}',
    config: Handler.deleteOne
  }
];

module.exports = Routes;
