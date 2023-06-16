const express = require("express");
const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
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

const announcementS = mongoose.model("announcementS", announcementSchema);

module.exports = announcementS;
