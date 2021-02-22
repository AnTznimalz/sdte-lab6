const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("bye-bye");
});

module.exports = app;
