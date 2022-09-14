const mongoose = require("mongoose");

const LojaSchema = new mongoose.Schema({
    loja_nomeFantasia: { type: String, required: true, unique: true },
    loja_url: { type: String, required: true, unique: true },
    dataHoraCriado: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Loja", LojaSchema);