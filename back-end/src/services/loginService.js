const Joi = require('joi');
const HandleErro = require('../utils/handleError');
const { createToken } = require('../utils/jwt');
const { checkPassword } = require('../utils/md5');
const { User } = require('../database/models');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const login = async ({ email, password }) => {
  const { error } = loginSchema.validate({ email, password });

  if (error) throw new HandleErro('BadRequest', 'Some required fields are missing');

  const userLogin = await User.findOne({ where: { email } });
  
  if (!userLogin) throw new HandleErro('NotFound', 'Not Found');

  checkPassword(password, userLogin.password);

  const token = createToken({ email: userLogin.email, role: userLogin.role, userId: userLogin.id });

  return { 
    token, 
    name: userLogin.name,
    email: userLogin.email,
    role: userLogin.role,
  };
};

module.exports = {
  login,
};