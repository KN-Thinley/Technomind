const express = require("express");
const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  comments: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

const testimonialS = mongoose.model("testimonialS", testimonialSchema);

module.exports = testimonialS;
