const mongoose = require("mongoose");

const eventoSchema = mongoose.Schema({
    descripcion:{
        type: String,
        required: true
    },
    fecha:{
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Evento', eventoSchema);