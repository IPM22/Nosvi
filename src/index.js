const express = require("express");
const mongoose = require("mongoose");
const eventoRoutes = require("./routes/evento");
const tipoEventos = require("./routes/tipoEvento");
const visitantes = require("./routes/visitante");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.port || 9000;
const whitelist = ["localhost:3000"];
//middleware
app.use(cors());
app.use(express.json());
app.use("/api", eventoRoutes);
app.use("/api", tipoEventos);
app.use("/api", visitantes);

//routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("Server listening in port", port));
