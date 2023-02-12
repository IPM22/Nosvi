const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tipoNovedadSchema = Schema({
  descripcion: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("TipoNovedad", tipoNovedadSchema);
