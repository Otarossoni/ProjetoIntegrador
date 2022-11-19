const express = require("express");
const routes = express.Router();
const controle = require("../controller/DenunciaPublicCont");

routes.route("/denunciasPublic").post(controle.incluir);

module.exports = routes;
