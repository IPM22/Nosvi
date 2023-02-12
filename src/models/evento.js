const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventoSchema = Schema({
  descripcion: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  tipoEvento: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "TipoEvento",
  },
  visitantes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Visitante",
    },
  ],
  entidades: [
    {
      type: Schema.Types.ObjectId,
      ref: "Entidades",
    },
  ],
});

module.exports = mongoose.model("Evento", eventoSchema);
