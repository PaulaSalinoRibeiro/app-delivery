const Joi = require('joi');
const HandleErro = require('../utils/handleError');
const { User } = require('../database/models');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const login = async ({ email, password }) => {
  const { error } = loginSchema.validate({ email, password });

  if (error) throw new HandleErro('BadRequest', 'Some required fields are missing');
};

module.exports = {
  login,
};