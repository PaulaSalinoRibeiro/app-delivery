const bcrypt = require('bcrypt');
const HandleErro = require('./handleError');

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(5);
  const passwordHash = bcrypt.hashSync(password, salt);
  return passwordHash;
};

const checkPassword = (password, passwordHash) => {
  const isMatch = bcrypt.compareSync(password, passwordHash);
  if (!isMatch) {
    throw new HandleErro('Unauthorized', 'Incorrect email or password');
  }
};

module.exports = {
  encryptPassword,
  checkPassword,
};