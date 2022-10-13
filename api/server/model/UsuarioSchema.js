const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  dataNascimento: { type: Date },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  dataHoraCriado: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
