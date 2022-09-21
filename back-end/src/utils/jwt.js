require('dotenv').config();
const jwt = require('jsonwebtoken');
const HandleErro = require('./handleError');

const createToken = ({ email, role }) => {
  const token = jwt.sign({ data: { email, role } }, process.env.JWT_SECRET, {
    expiresIn: '30d',
      algorithm: 'HS256',
  });
  return token;
};

const checkToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (_err) {
    throw new HandleErro('Unauthorized', 'Expired or invalid token');
  }
};

module.exports = {
  createToken,
  checkToken,
};