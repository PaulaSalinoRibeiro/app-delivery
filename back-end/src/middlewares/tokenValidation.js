const { checkToken } = require('../utils/jwt');

const tokenValidation = (req, res, next) => {
  const token = req.headers.authorization;
  const data = checkToken(token);
  req.user = data;
  next();
};

module.exports = tokenValidation;
