const Joi = require('joi');
const HandleError = require('../utils/handleError');
const { Product } = require('../database/models');

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().precision(2).required(),
  urlImage: Joi.string().required(),
});

const createProduct = async (product) => {
  const { error } = productSchema.validate(product);
  if (error) throw new HandleError('BadRequest', 'Some required fields are missing');
  
  return Product.create(product);
 };

const deleteProduct = async (id) => Product.destroy({ where: { id } });

const getProductById = async (id) => Product.findOne({ where: { id } });

const getProducts = async () => Product.findAll();

const updateProduct = async (id, product) => {
  const { error } = productSchema.validate(product);

  if (error) throw new HandleError('BadRequest', 'Some required fields are missing');

  if (!getProductById(id)) throw new HandleError('NotFound', 'Product not found');

  return Product.update(product, { where: { id } });
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getProducts,
  getProductById,
};