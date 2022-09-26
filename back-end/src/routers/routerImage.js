const { Router } = require('express');
const imageController = require('../controllers/imageController');

const routerImage = Router();

routerImage.get('/:imagename', imageController.getImage);

module.exports = routerImage;
