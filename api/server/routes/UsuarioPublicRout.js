const express = require("express");
const routes = express.Router();
const controle = require("../controller/UsuarioPublicCont");

routes.route("/usuariosPublic").get(controle.listar);

module.exports = routes;
