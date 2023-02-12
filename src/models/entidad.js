const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entidadSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },

  miembros: [
    {
      type: Schema.Types.ObjectId,
      ref: "Miembro",
    },
  ],
});

module.exports = mongoose.model("Entidad", entidadSchema);
