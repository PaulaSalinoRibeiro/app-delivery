const Joi = require('joi');
const HandleErro = require('../utils/handleError');
const { User } = require('../database/models');
const { encryptPassword } = require('../utils/md5');
const { createToken } = require('../utils/jwt');

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: Joi.string().required(),
});

const createUser = async (user) => {
  const { error } = userSchema.validate(user);

  if (error) throw new HandleErro('BadRequest', 'Some required fields are missing');
  
  const { password } = user;
  const passwordHash = encryptPassword(password);

  const newUser = await User.create({ ...user, password: passwordHash });

  const token = createToken({ email: user.email, role: user.role });

  return {
    token,
    role: newUser.role,
  };
};

const deleteUser = async (id) => User.destroy({ where: { id } });

module.exports = {
  createUser,
  deleteUser,
};