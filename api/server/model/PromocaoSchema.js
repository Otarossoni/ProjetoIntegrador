const mongoose = require("mongoose");

const PromocaoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  preco: { type: String, required: true },
  url: { type: String, required: true },
  cupom: { type: String },
  status: { type: String, required: true, default: "Aguardando" },
  dataHoraCriado: { type: Date, default: Date.now },
  loja_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Loja",
    require: true,
  },
  usuario_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    require: true,
  },
});

module.exports = mongoose.model("Promocao", PromocaoSchema);
