const express = require('express');
require('express-async-errors');
const cors = require('cors');
const routerLogin = require('../routers/routerLogin');
const erroMiddleware = require('../middlewares/errorMiddleware');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/login', routerLogin);

app.use(erroMiddleware);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
