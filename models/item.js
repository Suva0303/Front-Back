const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemScheme = new Schema({
  name: String,
  cost: Number
});

module.exports = mongoose.model("Item", itemScheme);