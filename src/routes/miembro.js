const express = require("express");
const miembroSchema = require("../models/miembro");
const router = express.Router();

// create miembro
router.post("/miembros", (req, res) => {
  const miembro = miembroSchema(req.body);
  miembro
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// show miembros
router.get("/miembros", (req, res) => {
  miembroSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// show miembros by name
router.post("/miembros/autocomplete", async (req, res) => {
  console.log(req.body.nombres);
  let nombres = req.body.nombres;
  let search = await miembroSchema
    .find({
      nombres: { $regex: new RegExp("^" + nombres + ".*", "i") },
    })
    .exec();
  search = search.slice(0, 10);
  res.send(search);
});

// show miembro
router.get("/miembros/:id", (req, res) => {
  const { id } = req.params;
  miembroSchema
    .findById(id)
    .populate(["estadoMiembro"])
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update miembro
router.put("/miembros/:id", (req, res) => {
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

  miembroSchema
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

// delete miembro
router.delete("/miembros/:id", (req, res) => {
  const { id } = req.params;

  miembroSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
