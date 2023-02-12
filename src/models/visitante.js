const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const date = new Date();

const visitanteSchema = Schema({
  nombres: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  sexo: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
  },
  telefono: {
    type: String,
  },
  celular: {
    type: String,
  },
  hasWhatsapp: {
    type: Boolean,
  },
  recibeNotificaciones: {
    type: Boolean,
  },
  fechaRegistro: {
    type: Date,
    required: true,
    default: date.getDate(),
  },
});

module.exports = mongoose.model("Visitante", visitanteSchema);
