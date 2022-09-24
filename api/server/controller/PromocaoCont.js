const Promocao = require('../model/PromocaoSchema');
module.exports = {
    listar: async (req, res) => {
        Promocao.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).populate('loja_id').populate('usuario_id').sort({ nome: 1 }); // -1 decrescente 1 crescente
    },

    incluir: async (req, res) => {
        let obj = new Promocao(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new Promocao(req.body);
        Promocao.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    excluir: async (req, res) => {
        Promocao.deleteOne({ _id: req.params.id }, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json("message:ok"));
        });
    },

    obterPeloId: (req, res) => {
        Promocao.findOne({ _id: req.params.id }, function (err, obj) {
          err ? res.status(400).send(err) : res.status(200).json(obj);
        }).populate('loja_id').populate('usuario_id');
    },

    filtrar: (req, res) => {
        Promocao.find(
          {
            $or: [
              { promocao_titulo: { $regex: req.params.filtro, $options: "i" } }
            ],
          },
          function (err, obj) {
            err ? res.status(400).send(err) : res.status(200).json(obj);
          }
        ).populate('loja_id').populate('usuario_id').sort({ nome: -1 }); // -1 decrescente 1 crescente
    },

    filtrarLoja: (req, res) => {
        Promocao.find(
          {
            loja_id:  req.params.filtro          
          },
          function (err, obj) {
            err ? res.status(400).send(err) : res.status(200).json(obj);
            console.log(err)
          }
        ).populate('loja_id').populate('usuario_id').sort({ nome: -1 }); // -1 decrescente 1 crescente
    },
};