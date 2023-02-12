const mongoose = require("mongoose");

const tipoEntidadSchema = mongoose.Schema({
  descripcion: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("TipoEntidad", tipoEntidadSchema);
