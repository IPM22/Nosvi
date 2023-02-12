const express = require("express");
const visitanteSchema = require("../models/visitante");
const router = express.Router();

// create visitante
router.post("/visitantes", (req, res) => {
  const visitante = visitanteSchema(req.body);
  visitante
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// show visitantes
router.get("/visitantes", (req, res) => {
  visitanteSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// show visitantes by name
router.post("/visitantes/autocomplete", async (req, res) => {
  console.log(req.body.nombres);
  let nombres = req.body.nombres;
  let search = await visitanteSchema
    .find({
      nombres: { $regex: new RegExp("^" + nombres + ".*", "i") },
    })
    .exec();
  search = search.slice(0, 10);
  res.send(search);
});

// show visitante
router.get("/visitantes/:id", (req, res) => {
  const { id } = req.params;
  visitanteSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update visitante
router.put("/visitantes/:id", (req, res) => {
  const { id } = req.params;
  const {
    nombres,
    apellidos,
    sexo,
    direccion,
    telefono,
    celular,
    hasWhatsapp,
    recibeNotificaciones,
  } = req.body;

  visitanteSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          nombres,
          apellidos,
          sexo,
          direccion,
          telefono,
          celular,
          hasWhatsapp,
          recibeNotificaciones,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete visitante
router.delete("/visitantes/:id", (req, res) => {
  const { id } = req.params;

  visitanteSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
