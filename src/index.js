const express = require('express');
const mongoose = require('mongoose');
const eventoRoutes = require('./routes/evento');
require("dotenv").config();

const app = express();
const port = process.env.port || 9000;

//middleware
app.use(express.json());
app.use('/api', eventoRoutes);

//routes 
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("DB Connected"))
    .catch((error)=> console.error(error));

app.listen(port, () => console.log('Server listening in port', port));
