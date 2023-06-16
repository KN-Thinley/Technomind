const express = require("express");
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    default: "pic",
  },
  description: {
    type: String,
    require: true,
  },
});

const eventS = mongoose.model("eventS", eventSchema);

module.exports = eventS;
