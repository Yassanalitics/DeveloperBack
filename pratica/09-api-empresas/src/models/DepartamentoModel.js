const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Departamentos', schema);
