const TpUsuario = require('../model/TpUsuarioSchema');
module.exports = {
    listar: async (req, res) => {
        TpUsuario.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ nome: 1 }); // -1 decrescente 1 crescente
    },

    incluir: async (req, res) => {
        let obj = new TpUsuario(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new TpUsuario(req.body);
        TpUsuario.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    excluir: async (req, res) => {
        TpUsuario.deleteOne({ _id: req.params.id }, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json("message:ok"));
        });
    },

    obterPeloId: (req, res) => {
        TpUsuario.findOne({ _id: req.params.id }, function (err, obj) {
          err ? res.status(400).send(err) : res.status(200).json(obj);
        });
    },

    filtrar: (req, res) => {
        TpUsuario.find(
          {
            $or: [
              { tipo_descricao: { $regex: req.params.filtro, $options: "i" } }
            ],
          },
          function (err, obj) {
            err ? res.status(400).send(err) : res.status(200).json(obj);
          }
        ).sort({ nome: -1 }); // -1 decrescente 1 crescente
    },
};