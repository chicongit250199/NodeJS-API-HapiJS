const path = require('path');
const CustomModel = require('./CustomModel');

class Project extends CustomModel {
  static get tableName() {
    return 'projects';
  }

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static get relationMappings() {
    return {
      team: {
        relation: CustomModel.BelongsToOneRelation,
        modelClass: path.join(__dirname, './Project'),
        join: {
          from: 'teams.projectId',
          to: 'projects.id'
        }
      }
    };
  }
}
module.exports = Project;
