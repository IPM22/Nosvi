const express = require("express");
const eventoSchema = require("../models/evento");
const router = express.Router();

// create evento
router.post("/eventos", (req, res) => {
 const evento =  eventoSchema(req.body);
 evento
 .save()
 .then((data)=> res.json(data))
 .catch((error) => res.json({message:error}))
});

// show eventos
router.get("/eventos", (req, res) => {
    eventoSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error) => res.json({message:error}))
   });

// show evento
router.get("/eventos/:id", (req, res) => {
    const { id } = req.params;
    eventoSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error) => res.json({message:error}))
   });

// update evento
router.put("/eventos/:id", (req, res) => {
    const { id } = req.params;
    const { descripcion, fecha} = req.body
    eventoSchema
    .updateOne({ _id: id },{ $set: {descripcion, fecha}})
    .then((data)=> res.json(data))
    .catch((error) => res.json({message:error}))
   });

// delete evento
router.delete("/eventos/:id", (req, res) => {
    const { id } = req.params;

    eventoSchema
    .remove({ _id: id })
    .then((data)=> res.json(data))
    .catch((error) => res.json({message:error}))
   });
   
module.exports = router