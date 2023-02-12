const express = require("express");
const eventoSchema = require("../models/evento");
const router = express.Router();

// create evento
router.post("/eventos", (req, res) => {
  const evento = eventoSchema(req.body);
  evento
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// show eventos
router.get("/eventos", (req, res) => {
  eventoSchema
    .find()
    .populate(["tipoEvento", "visitantes"])
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// show evento
router.get("/eventos/:id", (req, res) => {
  const { id } = req.params;
  eventoSchema
    .findById(id)
    .populate(["tipoEvento", "visitantes", "entidades"])
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update evento
router.put("/eventos/:id", (req, res) => {
  const { id } = req.params;
  const { descripcion, fecha } = req.body;
  eventoSchema
    .updateOne({ _id: id }, { $set: { descripcion, fecha } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete evento
router.delete("/eventos/:id", (req, res) => {
  const { id } = req.params;

  eventoSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// add visitor to event
router.put("/eventos/addVisitor/:id", (req, res) => {
  const { id } = req.params;
  const { visitante } = req.body;
  eventoSchema
    .updateOne({ _id: id }, { $push: { visitantes: visitante } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// add visitor to event
router.put("/eventos/removeVisitor/:id", (req, res) => {
  const { id } = req.params;
  const { visitante } = req.body;
  eventoSchema
    .updateOne({ _id: id }, { $pull: { visitantes: visitante } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
