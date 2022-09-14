const mongoose = require("mongoose");

const TpUsuarioSchema = new mongoose.Schema({
    tipo_descricao: { type: String, required: true, unique: true }
});

module.exports = mongoose.model("TpUsuario", TpUsuarioSchema);