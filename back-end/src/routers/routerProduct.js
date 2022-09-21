const { Router } = require('express');
const productController = require('../controllers/productController');
const tokenValidation = require('../middlewares/tokenValidation');

const routerProduct = Router();

routerProduct.use(tokenValidation);
routerProduct.post('/', productController.createProduct);
routerProduct.get('/', productController.getProducts);
routerProduct.delete('/:id', productController.createProduct);
routerProduct.put('/:id', productController.updateProduct);
routerProduct.get('/:id', productController.getProductById);

module.exports = routerProduct;
