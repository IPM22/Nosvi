const express = require("express");
const tipoEventoSchema = require("../models/tipoEvento");
const router = express.Router();

// create evento
router.post("/tipoEventos", (req, res) => {
  const tipoEvento = tipoEventoSchema(req.body);

  tipoEvento
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// show eventos
router.get("/tipoEventos", (req, res) => {
  tipoEventoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// show evento
router.get("/tipoEventos/:id", (req, res) => {
  const { id } = req.params;
  tipoEventoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update evento
router.put("/tipoEventos/:id", (req, res) => {
  const { id } = req.params;
  const { descripcion } = req.body;

  tipoEventoSchema
    .updateOne({ _id: id }, { $set: { descripcion } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete evento
router.delete("/tipoEventos/:id", (req, res) => {
  const { id } = req.params;

  tipoEventoSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
