const Joi = require('joi');
const HandleErro = require('../utils/handleError');
const { createToken } = require('../utils/jwt');
const { User } = require('../database/models');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const login = async ({ email, password }) => {
  const { error } = loginSchema.validate({ email, password });

  if (error) throw new HandleErro('BadRequest', 'Some required fields are missing');

  const userLogin = await User.findOne({ where: { email } });

  if (!userLogin) throw new HandleErro('BadRequest', 'Invalid fields');

  // check password

  const token = createToken(userLogin.email);

  return token;
};

module.exports = {
  login,
};