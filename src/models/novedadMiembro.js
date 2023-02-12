const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const date = new Date();

const novedadMiembroSchema = Schema({
  tipoNovedad: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "TipoEvento",
  },
  fechaRegistro: {
    type: Date,
    required: true,
    default: date,
  },
  miembro: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Miembro",
  },
  comentario: {
    type: String,
  },
});

module.exports = mongoose.model("NovedadMiembro", novedadMiembroSchema);
