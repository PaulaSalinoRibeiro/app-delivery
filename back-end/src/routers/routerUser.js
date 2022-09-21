const { Router } = require('express');
const userController = require('../controllers/userController');
const tokenValidation = require('../middlewares/tokenValidation');

const routerUser = Router();

routerUser.post('/', userController.createUser);
routerUser.use(tokenValidation);
routerUser.delete('/:id', userController.deleteUser);

module.exports = routerUser;
