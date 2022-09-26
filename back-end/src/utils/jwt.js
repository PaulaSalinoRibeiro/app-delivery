require('dotenv').config();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const HandleErro = require('./handleError');

let secret;

fs.readFile(
  './jwt.evaluation.key', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  secret = data;
},
);

const createToken = ({ email, role, userId }) => {
  const token = jwt.sign({ data: { email, role, userId } }, secret, {
    expiresIn: '30d',
      algorithm: 'HS256',
  });
  return token;
};

const checkToken = (token) => {
  try {
    const { data } = jwt.verify(token, secret);
    return data;
  } catch (_err) {
    throw new HandleErro('Unauthorized', 'Expired or invalid token');
  }
};

module.exports = {
  createToken,
  checkToken,
};