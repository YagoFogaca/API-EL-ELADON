const mongoose = require('mongoose');

const { Schema } = mongoose;

const paletasSchema = new Schema({
  id: { type: Number, required: true },
  sabor: { type: String, required: true },
  descricao: { type: String, required: true },
  foto: { type: String, required: true },
  preco: { type: Number, required: true },
});

const paletas = mongoose.model('Paleta', paletasSchema);

module.exports = paletas;
