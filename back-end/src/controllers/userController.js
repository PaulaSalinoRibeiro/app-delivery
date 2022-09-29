const userServices = require('../services/userService');

const createUser = async (req, res) => {
  const user = req.body;
  if (!user.role) {
    return res.status(201).json(await userServices.createUser({ ...user, role: 'customer' }));
  }
  const result = await userServices.createUser(user);
  res.status(201).json(result);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await userServices.deleteUser(id);
  res.status(200).end();
};

const getSellers = async (req, res) => {
  res.status(200).json(await userServices.getUser({ where: { role: 'seller' } }));
};

const getAllUsers = async (req, res) => {
  res.status(200).json(await userServices.getAllUsers());
};

module.exports = {
  createUser,
  deleteUser,
  getSellers,
  getAllUsers,
};