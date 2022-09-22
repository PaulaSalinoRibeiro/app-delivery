const Joi = require('joi');
const HandleError = require('../utils/handleError');
const { User } = require('../database/models');
const { encryptPassword } = require('../utils/md5');
const { createToken } = require('../utils/jwt');

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const createUser = async (user) => {
  const { error } = userSchema.validate(user);

  if (error) throw new HandleError('BadRequest', 'Some required fields are missing');
  
  const { password } = user;
  const passwordHash = encryptPassword(password);

  
  if (await User.findOne({ where: { email: user.email } })) {
    throw new HandleError('Conflict', 'User already exists');
  }
  
  const { dataValues } = await User.create({ ...user, password: passwordHash, role: 'customer' });
  
  const token = createToken({ email: user.email, role: 'customer' });

  return {
    token,
    name: dataValues.name,
    email: dataValues.email,
    role: dataValues.role,
 };
};

const deleteUser = async (id) => User.destroy({ where: { id } });

module.exports = {
  createUser,
  deleteUser,
};