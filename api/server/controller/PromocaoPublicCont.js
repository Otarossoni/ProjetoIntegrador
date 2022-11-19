const PromocaoPublic = require("../model/PromocaoSchema");
module.exports = {
  listar: async (req, res) => {
    Promocao.find((err, objetos) => {
      err ? res.status(400).send(err) : res.status(200).json(objetos);
    })
      .populate("loja_id")
      .populate("usuario_id")
      .sort({ nome: 1 }); // -1 decrescente 1 crescente
  },

  incluir: async (req, res) => {
    let obj = new PromocaoPublic(req.body);
    obj.save((err, obj) => {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },

  filtrar: (req, res) => {
    PromocaoPublic.find(
      {
        $or: [
          { promocao_titulo: { $regex: req.params.filtro, $options: "i" } },
        ],
      },
      function (err, obj) {
        err ? res.status(400).send(err) : res.status(200).json(obj);
      }
    )
      .populate("loja_id")
      .populate("usuario_id")
      .sort({ nome: -1 }); // -1 decrescente 1 crescente
  },

  filtrarLoja: (req, res) => {
    PromocaoPublic.find(
      {
        loja_id: req.params.filtro,
      },
      function (err, obj) {
        err ? res.status(400).send(err) : res.status(200).json(obj);
        console.log(err);
      }
    )
      .populate("loja_id")
      .populate("usuario_id")
      .sort({ nome: -1 }); // -1 decrescente 1 crescente
  },

  filtrarStatus: (req, res) => {
    PromocaoPublic.find(
      {
        $or: [{ status: { $regex: req.params.filtro, $options: "i" } }],
      },
      function (err, obj) {
        err ? res.status(400).send(err) : res.status(200).json(obj);
      }
    )
      .populate("loja_id")
      .populate("usuario_id")
      .sort({ nome: -1 }); // -1 decrescente 1 crescente
  },

  filtrarCategoria: (req, res) => {
    PromocaoPublic.find(
      {
        $or: [{ status: { $regex: "Ativa", $options: "i" } }],
        $and: [{ categoria: { $regex: req.params.filtro, $options: "i" } }],
      },
      function (err, obj) {
        err ? res.status(400).send(err) : res.status(200).json(obj);
      }
    )
      .populate("loja_id")
      .populate("usuario_id")
      .sort({ nome: -1 }); // -1 decrescente 1 crescente
  },
};
