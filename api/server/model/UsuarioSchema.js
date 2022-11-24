const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true },
  dataNascimento: { type: Date },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  dataHoraCriado: { type: Date, default: Date.now },
});
UsuarioSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, nome: this.nome },
    process.env.JWT_PRIV_KEY,
    { expiresIn: process.env.TOKEN_EXPIRE }
  );
  return token;
};
module.exports = mongoose.model("Usuario", UsuarioSchema);
