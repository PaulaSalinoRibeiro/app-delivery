const productServices = require('../services/productService');

const createProduct = async (req, res) => {
  const product = await productServices.createProduct(req.body);
  res.status(201).json(product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await productServices.updateProduct(id, req.body);
  res.status(200).json(product);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productServices.getProductById(id);
  res.status(200).json(product);
};

const getProducts = async (req, res) => {
  const products = await productServices.getProducts();
  res.status(200).json(products);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await productServices.deleteProduct(id);
  res.status(200).end();
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getProductById,
  getProducts,
};