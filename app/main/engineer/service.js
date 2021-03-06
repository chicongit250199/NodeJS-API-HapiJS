// const Boom = require('boom');
const _ = require('lodash')
const Models = require('../../database/models/index');
const BaseService = require('../../base/BaseService');
// const PasswordUtils = require('../../services/password');
class EngineerService extends BaseService {
  constructor() {
    super(Models.Engineer);
  }

  // start GetOne
  async getOne(id) {
    try {
      const result = await Models.Engineer.query() // select skill
        .findById(id)
        .eager('skills(selectSkill)', {
          selectSkill: builder => {
            builder.select('skills.name');
          }
        })
        .mergeEager(
          'teams(selectTeam)', // select Team
          {
            selectTeam: builder => {
              builder
                .joinRelation('projects')
                .select('teams.name as teamName', 'projects.name as projectName'); // select project
            }
          }
        )
        .select(
          'id',
          'firstName',
          'lastName',
          'englishName',
          'phoneNumber',
          'address',
          'email',
          'skype',
          'expYear'
        );
      const n = result.teams.length;
      result.totalProject = n;
      if (!result) {
        throw Boom.notFound(`Not found`);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  // end GetOne
  // I Love you => so much
  // start create one

  async createOne(payload) {
    try {
      const { skills } = payload;
      delete payload.skills;
      const engneer = await Models.Engineer.query().insert(payload);
      await engneer.$relatedQuery('skills').relate(skills);
      return engneer;
    } catch (error) {
      console.log(error);
    }
  }
  // end create one
}
module.exports = EngineerService;
