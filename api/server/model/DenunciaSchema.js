const mongoose = require("mongoose");

const DenunciaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  dataHoraCriado: { type: Date, default: Date.now },
  usuario_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    require: true,
  },
  promocao_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Promocao",
    require: true,
  },
});

module.exports = mongoose.model("Denuncia", DenunciaSchema);
