const md5 = require('md5');
const HandleErro = require('./handleError');

const encryptPassword = (password) => {
  const passwordHash = md5(password);
  return passwordHash;
};

const checkPassword = (password, passwordHash) => {
  const encript = md5(password);

  if (encript !== passwordHash) {
    throw new HandleErro('Unauthorized', 'Incorrect email or password');
  }
};

module.exports = {
  encryptPassword,
  checkPassword,
};