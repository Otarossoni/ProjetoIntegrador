const Usuario = require("../model/UsuarioSchema");
const bcrypt = require("bcrypt");

function makeName(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function makeid(length) {
  var result = "";
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports = {
  listar: async (req, res) => {
    Usuario.find((err, objetos) => {
      err ? res.status(400).send(err) : res.status(200).json(objetos);
    }).sort({ nome: 1 }); // -1 decrescente 1 crescente
  },

  incluir: async (req, res) => {
    let obj = new Usuario(req.body);
    const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT));
    obj.senha = await bcrypt.hash(obj.senha, salt);
    obj.save((err, obj) => {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },

  alterar: async (req, res) => {
    let obj = new Usuario(req.body);
    const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT));
    obj.senha = await bcrypt.hash(obj.senha, salt);
    Usuario.updateOne({ _id: obj._id }, obj, function (err) {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },

  excluir: async (req, res) => {
    Usuario.deleteOne({ _id: req.params.id }, function (err) {
      err ? res.status(400).send(err) : res.status(200).json("message:ok");
    });
  },

  obterPeloId: (req, res) => {
    Usuario.findOne({ _id: req.params.id }, function (err, obj) {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },

  filtrar: (req, res) => {
    Usuario.find(
      {
        $or: [
          { nome: { $regex: req.params.filtro, $options: "i" } },
          { cpf: { $regex: req.params.filtro, $options: "i" } },
          { email: { $regex: req.params.filtro, $options: "i" } },
        ],
      },
      function (err, obj) {
        err ? res.status(400).send(err) : res.status(200).json(obj);
      }
    ).sort({ nome: -1 }); // -1 decrescente 1 crescente
  },

  anonimizar: (req, res) => {
    let id = req.params.id;
    let idAnonimo = makeid(11);
    let nomeAnonimo = makeName(10);
    let usuario = {
      _id: id,
      nome: `ZZZ${nomeAnonimo}`,
      cpf: idAnonimo,
      dataNascimento: "2000-01-01T03:00:00.000Z",
      dataHoraCriado: "1800-01-01T03:00:00.000Z",
      email: `${nomeAnonimo}@anonimizado.com`,
      senha: id,
    };
    Usuario.updateOne({ _id: id }, usuario, function (err) {
      err ? res.status(400).send(err) : res.status(200).json(usuario);
    });
  },
};
