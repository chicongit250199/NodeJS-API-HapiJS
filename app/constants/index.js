const USER_ROLE = {
  SUPER_ADMIN: 1,
  ADMIN: 2,
  USER: 3
};

const SALT_ROUNDS = 10;
const JWT_SECRET = 'codebase';

module.exports = {
  USER_ROLE,
  SALT_ROUNDS,
  JWT_SECRET
};
