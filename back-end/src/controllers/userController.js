const userServices = require('../services/userService');

const createUser = async (req, res) => {
  const user = req.body;
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

module.exports = {
  createUser,
  deleteUser,
  getSellers,
};