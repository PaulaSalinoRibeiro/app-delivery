const Joi = require('joi');
const HandleError = require('../utils/handleError');
const { Sale, sequelize, SalesProducts, Product, User } = require('../database/models');
const { getProductById } = require('./productService');

const saleSchema = Joi.object({
  sellerId: Joi.number().required(),
  products: Joi.array().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.number().required(),
  saleDate: Joi.string().required(),
});

const createSale = async (sale, userId) => {
  const { error } = saleSchema.validate(sale);
  if (error) throw new HandleError('BadRequest', 'Some required fields are missing');

  const t = await sequelize.transaction();
  const products = await Promise.all(sale.products.map((product) => getProductById(product.id)));

  try {
    const total = products
      .reduce((acc, product, index) => acc + product.price * sale.products[index].quantity, 0);

    const { dataValues } = await Sale
    .create({ ...sale, totalPrice: total, status: 'Pendente', userId }, { transaction: t });

    await SalesProducts.bulkCreate(sale.products.map((product) => ({ 
        saleId: dataValues.id,
        productId: product.id,
        quantity: product.quantity, 
      }
    )), { transaction: t });
    await t.commit();
    return dataValues;
  } catch (err) { console.log(err); await t.rollback(); }
};

const getAllSalesById = async (query) => Sale.findAll(query);

const getSaleById = async (id) => Sale.findOne(
  { where: { id },
  include: [
    { model: Product, as: 'products' },
    { model: User, as: 'seller', attributes: { exclude: ['password'] } },
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
  ],
  },
);

const deleteSale = async (id) => Sale.destroy({ where: { id } });

const updateSale = async (id, sale) => {
  if (!getSaleById(id)) throw new HandleError('NotFound', 'Sale not found');

  return Sale.update(sale, { where: { id } });
};

module.exports = {
  createSale,
  deleteSale,
  updateSale,
  getSaleById,
  getAllSalesById,
};