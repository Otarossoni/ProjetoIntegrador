const express = require("express");
const routes = express.Router();
const controle = require("../controller/LojaPublicCont");

routes.route("/lojasPublic").get(controle.listar);

module.exports = routes;
