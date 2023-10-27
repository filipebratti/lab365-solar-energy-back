const {
    createOneUnidade,
    listAllUnidades,
    listOneUnidade,
    listAllUnidadesAtivas,
    listAllUnidadesInativas,
    updateOneUnidade,
    deleteOneUnidade,
    restoreOneUnidade,
} = require('../controllers/unidades.controller');

const { Router } = require('express');

const auth = require('../middlewares/auth');

class UnidadeRoutes {
    routesFromUnidade() {
        const unidadeRoutes = Router()
        unidadeRoutes.post('/createOneUnidade', auth, createOneUnidade);
        unidadeRoutes.get('/listAllUnidades', auth, listAllUnidades);
        unidadeRoutes.get('/listOneUnidade/:id', auth, listOneUnidade);
        unidadeRoutes.get('/listAllUnidadesAtivas', auth, listAllUnidadesAtivas);
        unidadeRoutes.get('/listAllUnidadesInativas', auth, listAllUnidadesInativas);
        unidadeRoutes.patch('/updateOneUnidade/:id', auth, updateOneUnidade);
        unidadeRoutes.delete('/deleteOneUnidade/:id', auth, deleteOneUnidade);
        unidadeRoutes.patch('/restoreOneUnidade/:id', auth, restoreOneUnidade);
        return unidadeRoutes;
    }
}

module.exports = new UnidadeRoutes();