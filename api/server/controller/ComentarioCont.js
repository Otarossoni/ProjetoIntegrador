const Comentario = require("../model/ComentarioSchema");
module.exports = {
  listar: async (req, res) => {
    Comentario.find((err, objetos) => {
      err ? res.status(400).send(err) : res.status(200).json(objetos);
    })
      .populate("promocao_id")
      .populate("usuario_id")
      .sort({ nome: 1 }); // -1 decrescente 1 crescente
  },

  incluir: async (req, res) => {
    let obj = new Comentario(req.body);
    obj.save((err, obj) => {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },

  alterar: async (req, res) => {
    let obj = new Comentario(req.body);
    Comentario.updateOne({ _id: obj._id }, obj, function (err) {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    });
  },

  excluir: async (req, res) => {
    Comentario.deleteOne({ _id: req.params.id }, function (err) {
      err ? res.status(400).send(err) : res.status(200).json("message:ok");
    });
  },

  obterPeloId: (req, res) => {
    Comentario.findOne({ _id: req.params.id }, function (err, obj) {
      err ? res.status(400).send(err) : res.status(200).json(obj);
    })
      .populate("promocao_id")
      .populate("usuario_id");
  },

  filtrar: (req, res) => {
    Comentario.find(
      {
        $or: [
          { titulo: { $regex: req.params.filtro, $options: "i" } },
          { descricao: { $regex: req.params.filtro, $options: "i" } },
        ],
      },
      function (err, obj) {
        err ? res.status(400).send(err) : res.status(200).json(obj);
      }
    )
      .populate("promocao_id")
      .populate("usuario_id")
      .sort({ nome: -1 }); // -1 decrescente 1 crescente
  },
};
