const express = require("express");
const app = express();
const config = require("./utils/config");
const cors = require("cors");
const mongoose = require("mongoose");

const materialRouter = require("./controllers/materials");
const compositionRouter = require("./controllers/composition.js");

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());

app.use("/api/material", materialRouter);
app.use("/api/composition", compositionRouter);

module.exports = app;
