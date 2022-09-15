const mongoose = require("mongoose");

const PromocaoSchema = new mongoose.Schema({
    promocao_titulo: { type: String, required: true },
    promocao_descricao: { type: String, required: true },
    promocao_preco: { type: String, required: true },
    promocao_url: { type: String, required: true },
    promocao_cupom: { type: String },
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