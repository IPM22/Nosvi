const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const date = new Date();

const miembroSchema = Schema({
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
  fechaNacimiento: {
    type: Date,
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
  correo: {
    type: String,
  },
  estado: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "EstadoMiembro",
  },
  novedades: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "NovedadMiembro",
    },
  ],
  fechaRegistro: {
    type: Date,
    required: true,
    default: date.getDate(),
  },
});

module.exports = mongoose.model("Miembro", miembroSchema);
