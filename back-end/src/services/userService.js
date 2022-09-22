const Joi = require('joi');
const HandleErro = require('../utils/handleError');
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

  if (error) throw new HandleErro('BadRequest', 'Some required fields are missing');
  
  const { password, email } = user;
  const passwordHash = encryptPassword(password);

<<<<<<< HEAD
  const userExist = await User.findOne({ where: { email }});
  
  if(userExist) throw new HandleErro('Conflict', 'User already exist!');

  const {dataValues} = await User.create({ ...user, password: passwordHash, role: 'customer' });
=======
  if (await User.findOne({ where: { email: user.email } })) {
    throw new HandleErro('Conflict', 'User already exists');
  }
  const newUser = await User.create({ ...user, password: passwordHash, role: 'customer' });
>>>>>>> 60964e5aa67b46127869718b05169d49fec8add6

  const token = createToken({ email: user.email, role: 'customer' });

  return {
    token,
    user: {
      name: dataValues.name,
      email: dataValues.email,
      role: dataValues.role,
    }
  };
};

const deleteUser = async (id) => User.destroy({ where: { id } });

module.exports = {
  createUser,
  deleteUser,
};