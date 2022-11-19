const express = require("express");
const routes = express.Router();
const controle = require("../controller/PromocaoPublicCont");

routes.route("/promocaosPublic").get(controle.listar);
routes.route("/promocaosPublic").post(controle.incluir);
routes.route("/promocaosPublic/filtro/:filtro").get(controle.filtrar);
routes.route("/promocaosPublic/loja/:filtro").get(controle.filtrarLoja);
routes.route("/promocaosPublic/status/:filtro").get(controle.filtrarStatus);
routes
  .route("/promocaosPublic/categoria/:filtro")
  .get(controle.filtrarCategoria);

module.exports = routes;
