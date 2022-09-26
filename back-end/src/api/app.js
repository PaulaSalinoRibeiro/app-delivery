const express = require('express');
require('express-async-errors');
const cors = require('cors');
const path = require('path');
const routerLogin = require('../routers/routerLogin');
const erroMiddleware = require('../middlewares/errorMiddleware');
const routerUser = require('../routers/routerUser');
const routerProduct = require('../routers/routerProduct');
const routerSale = require('../routers/routerSale');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/login', routerLogin);

app.use('/user', routerUser);

app.use('/product', routerProduct);

app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

app.use('/sale', routerSale);

app.use(erroMiddleware);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
