const express = require('express');
const routes = express.Router();
const controle = require('../controller/TpUsuarioCont');

routes.route('/tpusuarios').get(controle.listar);
routes.route('/tpusuarios').post(controle.incluir);
routes.route('/tpusuarios').put(controle.alterar);
routes.route('/tpusuarios/:id').delete(controle.excluir);
routes.route('/tpusuarios/:id').get(controle.obterPeloId);
routes.route('/tpusuarios/filtro/:filtro').get(controle.filtrar);

module.exports = routes;