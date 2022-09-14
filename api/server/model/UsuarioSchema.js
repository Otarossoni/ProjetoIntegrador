const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    usuario_nome: { type: String, required: true },
    usuario_cpf: { type: String, required: true, unique: true },
    usuario_dataNascimento: { type: Date },
    usuario_email: { type: String, required: true, unique: true },
    usuario_senha: { type: String, required: true},
    dataHoraCriado: { type: Date, default: Date.now },
    tipo_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TpUsuario",
        require: true,
    },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);