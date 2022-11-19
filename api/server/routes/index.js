const { Router } = require("express");
const routes = Router();
var cors = require("cors");

// Liberar todas as origens para requisições
// routes.use(cors({ origin: "*" }));

// Libera apenas as origens especificadas - AppAdmin e AppUser, respectivamente
const origins = ["http://localhost:3001", "http://localhost:3002"];
routes.use(cors({ origin: origins }));

// Rotas públicas para cada módulo
const loginRout = require("./LoginRout");
routes.use("/api", loginRout);
const promocaoPublicRout = require("./PromocaoPublicRout");
routes.use("/api", promocaoPublicRout);
const denunciaPublicRout = require("./DenunciaPublicRout");
routes.use("/api", denunciaPublicRout);
const lojaPublicRout = require("./LojaPublicRout");
routes.use("/api", lojaPublicRout);
const usuarioPublicRout = require("./UsuarioPublicRout");
routes.use("/api", usuarioPublicRout);

// Método que exige token para acesso das rotas privadas abaixo dele
const jwt = require("jsonwebtoken");
routes.use(function (req, res, next) {
  // interceptar as requisições a validar o token
  try {
    const token = req.header("x-auth-token");
    if (!token)
      return res.status(403).send({
        message: "Não possui token de autenticação. Acesso não autorizado!",
      });
    jwt.verify(token, process.env.JWT_PRIV_KEY, function (err, decoded) {
      if (err)
        return res.status(500).send({
          auth: false,
          message: "Token inválido. Acesso não autorizado!",
        });
      // estando tudo certo guarda no request para uso posterior
      req.userId = decoded._id;
      req.userName = decoded.nome;
      next();
    });
  } catch (error) {
    res.status(400).send("Erro no token de autenticação!");
  }
});

//Rotas privadas para cada módulo
const usuarioRout = require("./UsuarioRout");
routes.use("/api", usuarioRout);
const lojaRout = require("./LojaRout");
routes.use("/api", lojaRout);
const promocaoRout = require("./PromocaoRout");
routes.use("/api", promocaoRout);
const denunciaRout = require("./DenunciaRout");
routes.use("/api", denunciaRout);
const comentarioRout = require("./ComentarioRout");
routes.use("/api", comentarioRout);

module.exports = routes;
