// const Boom = require('boom');
const Models = require('../../database/models/index');
const BaseService = require('../../base/BaseService');
// const PasswordUtils = require('../../services/password');
const _ = require('lodash')
class EngineerService extends BaseService {
  constructor() {
    super(Models.Engineer);
  }
//start GetOne
async getOne (id){
  try {
    const result = await Models.Engineer
  .query().findById(id)
  .eager('skills(selectSkill)',
  {
    selectSkill: builder =>{
      builder.select('skills.name')
  }
  })
  .select('id','firstName','lastName','englishName','phoneNumber','address','email','skype','expYear')
 
  if (!result) {
    throw Boom.notFound(`Not found`);
  }
  return result;
  } catch (error) {
    console.log(error);
  }
  
}
//end GetOne
// I Love you => so much
//start create one

 async createOne(payload){
   try {
     const {skills} = payload;
     delete payload.skills;
     const engneer = await Models.Engineer.query().insert(payload);
     await engneer.$relatedQuery('skills').relate(skills);
     return engneer;
   } catch (error) {
     console.log(error);
   }
  }
   //end create one
} 
module.exports = EngineerService;
