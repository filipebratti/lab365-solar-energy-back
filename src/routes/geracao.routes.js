
const {
    listaGeracaoDaUnidade,
    createOneGeracao
} = require('../controllers/geracao.controller');

const { Router } = require('express');

const auth = require('../middlewares/auth');

class GeracaoRoutes {
    routesFromGeracao() {
        const geracaoRoutes = Router()
        geracaoRoutes.get('/listaGeracaoDaUnidade/:unidadeId', listaGeracaoDaUnidade);
        geracaoRoutes.post('/createOneGeracao', createOneGeracao);
        return geracaoRoutes;
    }
}

module.exports = new GeracaoRoutes();

