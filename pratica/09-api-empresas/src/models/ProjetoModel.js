const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    dataInicio: { type: Date, required: true },
    dataFim: { type: Date, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Projetos', schema);