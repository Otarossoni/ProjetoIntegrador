const mongoose = require("mongoose");

const DenunciaSchema = new mongoose.Schema({
    denuncia_titulo: { type: String, required: true },
    denuncia_descricao: { type: String, required: true },
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