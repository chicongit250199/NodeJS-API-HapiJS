const faker = require('faker/locale/en');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../../constants');

exports.createManager = id => ({
  username: faker.internet.userName(),
  password: bcrypt.hashSync('123456', SALT_ROUNDS),
  roleId: id
});

exports.createEngineer = () => {
  const firstName = faker.name.firstName();
  return {
    firstName,
    lastName: faker.name.lastName(),
    englishName: firstName,
    phoneNumber: faker.phone.phoneNumberFormat(),
    address: faker.address.streetAddress(),
    email: faker.internet.email(),
    expYear: faker.random.number({
      min: 0,
      max: 10
    }),
    skype: faker.internet.email(),
    status: 1
    // skype: 'eureka.m'+ faker.random.
  };
};
