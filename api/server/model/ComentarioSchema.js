const mongoose = require("mongoose");

const ComentarioSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  dataHoraCriado: { type: Date, default: Date.now },
  promocao_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Promocao",
    require: true,
  },
  usuario_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    require: true,
  },
});

module.exports = mongoose.model("Comentario", ComentarioSchema);
