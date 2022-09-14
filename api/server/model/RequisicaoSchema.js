const mongoose = require("mongoose");

const RequisicaoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    objeto: { type: String, required: true },
    descricao: { type: String, required: true },
    tempoDisponivel: { type: String, required: true},
    status: { type: String },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        require: true,
    },
    assistencia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assistencia",
        require: false,
    }
});

module.exports = mongoose.model("Requisicao", RequisicaoSchema);