const express = require('express');
const cors = require('cors');
const jwt = require('./helpers/tokenVerify');

require('dotenv').config({  
    path: process.env.NODE_ENV === "dev" ? ".env-dev" : ".env"
})

console.log(process.env.NODE_TESTE)

const app = express();

// ==> Rotas da API:
const index = require('./routes/index');
const productRoute = require('./routes/product.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', jwt.validarToken, productRoute);

module.exports = app;