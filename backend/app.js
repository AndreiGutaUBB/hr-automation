const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb+srv://admin:admin@hr.gbbjd7n.mongodb.net/test")
  .then(() => {
    console.log("Connected to db");
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.use((req, res, next) => {
  next();
});

module.exports = app;
