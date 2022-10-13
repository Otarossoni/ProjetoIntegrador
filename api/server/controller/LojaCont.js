const Loja = require("../model/LojaSchema");
module.exports = {
  listar: async (req, res) => {
    Loja.find((err, objetos) => {
      err ? res.status(400).send(err) : res.status(200).json(objetos);
    }).sort({ nome: 1 }); // -1 decrescente 1 crescente
  },

  incluir: async (req, res) => {
    let obj = new Loja(req.body);
    obj.save((err, obj) => {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },

  alterar: async (req, res) => {
    let obj = new Loja(req.body);
    Loja.updateOne({ _id: obj._id }, obj, function (err) {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },

  excluir: async (req, res) => {
    Loja.deleteOne({ _id: req.params.id }, function (err) {
      err ? res.status(400).send(err) : res.status(200).json("message:ok");
    });
  },

  obterPeloId: (req, res) => {
    Loja.findOne({ _id: req.params.id }, function (err, obj) {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },

  filtrar: (req, res) => {
    Loja.find(
      {
        $or: [{ nomeFantasia: { $regex: req.params.filtro, $options: "i" } }],
      },
      function (err, obj) {
        err ? res.status(400).send(err) : res.status(200).json(obj);
      }
    ).sort({ nome: -1 }); // -1 decrescente 1 crescente
  },
};
