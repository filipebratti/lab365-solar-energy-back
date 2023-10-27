const { Router } = require('express');
const { routesFromUsuario } = require('./usuario.routes');
const { routesFromUnidade } = require('./unidade.routes');
// //const { routesFromLogin } = require('./login.routes');
const { routesFromGeracao } = require('./geracao.routes');

const routes = Router();

routes.use('/api', [
    routesFromUsuario(),

    routesFromUnidade(),
    // routesFromLogin,

    routesFromGeracao(),
]);

module.exports = routes;
