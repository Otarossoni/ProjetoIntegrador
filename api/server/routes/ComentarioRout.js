const express = require('express');
const routes = express.Router();
const controle = require('../controller/ComentarioCont');

routes.route('/comentarios').get(controle.listar);
routes.route('/comentarios').post(controle.incluir);
routes.route('/comentarios').put(controle.alterar);
routes.route('/comentarios/:id').delete(controle.excluir);
routes.route('/comentarios/:id').get(controle.obterPeloId);
routes.route('/comentarios/filtro/:filtro').get(controle.filtrar);

module.exports = routes;