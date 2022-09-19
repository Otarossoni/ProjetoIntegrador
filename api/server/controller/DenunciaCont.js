const Denuncia = require('../model/DenunciaSchema');
module.exports = {
    listar: async (req, res) => {
        Denuncia.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).populate('usuario_id').populate('promocao_id').sort({ nome: 1 }); // -1 decrescente 1 crescente
    },

    incluir: async (req, res) => {
        let obj = new Denuncia(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new Denuncia(req.body);
        Denuncia.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    excluir: async (req, res) => {
        Denuncia.deleteOne({ _id: req.params.id }, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json("message:ok"));
        });
    },

    obterPeloId: (req, res) => {
        Denuncia.findOne({ _id: req.params.id }, function (err, obj) {
          err ? res.status(400).send(err) : res.status(200).json(obj);
        }).populate('usuario_id').populate('promocao_id');
    },

    filtrar: (req, res) => {
        Denuncia.find(
          {
            $or: [
              { denuncia_titulo: { $regex: req.params.filtro, $options: "i" } }
            ],
          },
          function (err, obj) {
            err ? res.status(400).send(err) : res.status(200).json(obj);
          }
        ).populate('usuario_id').populate('promocao_id').sort({ nome: -1 }); // -1 decrescente 1 crescente
    },
};