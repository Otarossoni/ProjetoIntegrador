const mongoose = require("mongoose");

const ComentarioSchema = new mongoose.Schema({
    comentario_titulo: { type: String, required: true },
    comentario_descricao: { type: String, required: true },
    promocao_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Promocao",
        require: true,
    },
});

module.exports = mongoose.model("Comentario", ComentarioSchema);