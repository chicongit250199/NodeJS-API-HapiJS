// const Boom = require('boom');
const Models = require('../../database/models/index');
const BaseService = require('../../base/BaseService');
// const PasswordUtils = require('../../services/password');

class TeamService extends BaseService {
  constructor() {
    super(Models.Team);
  }
  async getOne (id) {
    try {
      //const result = await Models.Team.query().findById(id).joinRelation('team').select('project.id', 'project.name', 'project.technology');
      const result = await Models.Team
      .query().findById(id)
      .eager('engineers(selectEng)', {
        selectEng: builder => {
          builder.select('engineers.lastName','engineers.expYear')
        } 
      }).mergeEager('projects(selectProject)', {
        selectProject: builder => {
          builder.select('projects.name','projects.technology','projects.start','projects.end')
        }
        })
      .select('teams.id', 'teams.name');
      if (!result) {
        throw Boom.notFound(`Not found`);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
   
  }
}

module.exports = TeamService;
