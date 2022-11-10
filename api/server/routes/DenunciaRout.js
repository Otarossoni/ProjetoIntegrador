const express = require("express");
const routes = express.Router();
const controle = require("../controller/DenunciaCont");

routes.route("/denuncias").get(controle.listar);
routes.route("/denuncias").post(controle.incluir);
routes.route("/denuncias").put(controle.alterar);
routes.route("/denuncias/:id").delete(controle.excluir);
routes.route("/denuncias/:id").get(controle.obterPeloId);
routes.route("/denuncias/filtro/:filtro").get(controle.filtrar);
routes.route("/denuncias/status/:filtro").get(controle.filtrarStatus);

module.exports = routes;
