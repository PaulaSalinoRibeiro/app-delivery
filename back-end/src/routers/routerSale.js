const { Router } = require('express');
const saleController = require('../controllers/saleController');
const tokenValidation = require('../middlewares/tokenValidation');

const routerSale = Router();

routerSale.use(tokenValidation);
routerSale.post('/', saleController.createSale);
routerSale.delete('/:id', saleController.deleteSale);
routerSale.put('/:id', saleController.updateSale);
routerSale.get('/', saleController.getAllSalesById);
routerSale.get('/:id', saleController.getSaleById);

module.exports = routerSale;
