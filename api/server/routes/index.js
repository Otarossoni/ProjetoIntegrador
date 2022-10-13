const { Router } = require("express");
const routes = Router();

// Liberar origens para requisições
var cors = require("cors");
routes.use(cors({ origin: "*" }));
//routes.use(cors({origin: 'http://localhost:3001'}));

const usuarioRout = require("./UsuarioRout");
routes.use("/api", usuarioRout);

const lojaRout = require("./LojaRout");
routes.use("/api", lojaRout);

const promocaoRout = require("./PromocaoRout");
routes.use("/api", promocaoRout);

const comentarioRout = require("./ComentarioRout");
routes.use("/api", comentarioRout);

const denunciaRout = require("./DenunciaRout");
routes.use("/api", denunciaRout);

module.exports = routes;
