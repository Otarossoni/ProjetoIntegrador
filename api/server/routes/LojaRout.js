const express = require('express');
const routes = express.Router();
const controle = require('../controller/LojaCont');

routes.route('/lojas').get(controle.listar);
routes.route('/lojas').post(controle.incluir);
routes.route('/lojas').put(controle.alterar);
routes.route('/lojas/:id').delete(controle.excluir);
routes.route('/lojas/:id').get(controle.obterPeloId);
routes.route('/lojas/filtro/:filtro').get(controle.filtrar);

module.exports = routes;