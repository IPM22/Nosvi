const mongoose = require("mongoose");

const tipoEventoSchema = mongoose.Schema({
    descripcion:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('TipoEvento', tipoEventoSchema);