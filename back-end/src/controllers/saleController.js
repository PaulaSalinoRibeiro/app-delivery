const saleService = require('../services/saleService');
const { checkToken } = require('../utils/jwt');

const createSale = async (req, res) => {
  const sale = await saleService.createSale(req.body, checkToken(req.headers.authorization).userId);
  res.status(201).json(sale);
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const sale = await saleService.updateSale(id, req.body);
  res.status(200).json(sale);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const sale = await saleService.getSaleById(id);
  res.status(200).json(sale);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  await saleService.deleteSale(id);
  res.status(200).end();
};

module.exports = {
  createSale,
  deleteSale,
  updateSale,
  getSaleById,
};