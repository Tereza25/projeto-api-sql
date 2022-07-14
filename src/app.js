const express = require("express");
const index = require ("./routes/index.js"); 
const filmes = require('./routes/filmesRoute.js')

const app = express();

app.use(express.json());

app.use("/", index);
app.use(filmes);

module.exports = app;
