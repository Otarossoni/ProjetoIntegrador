const UsuarioPublic = require("../model/UsuarioSchema");
const bcrypt = require("bcrypt");

module.exports = {
  listar: async (req, res) => {
    UsuarioPublic.find((err, objetos) => {
      err ? res.status(400).send(err) : res.status(200).json(objetos);
    }).sort({ nome: 1 }); // -1 decrescente 1 crescente
  },

  incluir: async (req, res) => {
    let obj = new UsuarioPublic(req.body);
    const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT));
    obj.senha = await bcrypt.hash(obj.senha, salt);
    obj.save((err, obj) => {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },
};
