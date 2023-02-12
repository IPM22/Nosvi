const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const estadoMiembroSchema = Schema({
  descripcion: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("EstadoMiembro", estadoMiembroSchema);
