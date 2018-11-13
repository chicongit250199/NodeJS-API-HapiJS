const path = require('path');
const CustomModel = require('./CustomModel');

class User extends CustomModel {
  static get tableName() {
    return 'users';
  }

  static get $hidden() {
    return ['password'];
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
      roles: {
        relation: CustomModel.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/Role'),
        join: {
          from: 'users.roleId',
          to: 'roles.id'
        }
      }
    };
  }
}

module.exports = User;
