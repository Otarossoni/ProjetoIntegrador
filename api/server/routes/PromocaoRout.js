const express = require("express");
const routes = express.Router();
const controle = require("../controller/PromocaoCont");

routes.route("/promocaos").get(controle.listar);
routes.route("/promocaos").post(controle.incluir);
routes.route("/promocaos").put(controle.alterar);
routes.route("/promocaos/aprovar").put(controle.aprovarPromocao);
routes.route("/promocaos/rejeitar").put(controle.rejeitarPromocao);
routes.route("/promocaos/expirar").put(controle.expirarPromocao);
routes.route("/promocaos/:id").delete(controle.excluir);
routes.route("/promocaos/:id").get(controle.obterPeloId);
routes.route("/promocaos/filtro/:filtro").get(controle.filtrar);
routes.route("/promocaos/loja/:filtro").get(controle.filtrarLoja);
routes.route("/promocaos/status/:filtro").get(controle.filtrarStatus);
routes.route("/promocaos/categoria/:filtro").get(controle.filtrarCategoria);

module.exports = routes;
