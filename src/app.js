const express = require("express");
const index = require ("./routes/index.js"); 
const filmes = require('./routes/filmesRoute.js');
const users = require('./routes/usersRoute.js');

const app = express();

app.use(express.json());

app.use("/", index);
app.use(filmes);
app.use(users);

module.exports = app;
