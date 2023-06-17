const express = require("express");
const mongoose = require("mongoose");
const validator = require("validator");

const incubationSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  gender: {
    type: String,
    require: true,
  },
  dateOfBirth: {
    type: Date,
    require: true,
  },
  cid: {
    type: Number,
    validate: {
      validator: function (value) {
        return /^(\d{11})$/.test(value.toString());
      },
      message: "CID must be exactly 11 digits.",
    },
    require: true,
  },
  academicQualification: {
    type: String,
    require: true,
  },
  currentAddress: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  institution: {
    type: String,
    require: true,
  },

  training: {
    type: String,
    require: true,
  },

  duration: {
    type: String,
    require: true,
  },
  briefDesp: {
    type: String,
    require: true,
  },
  supportRequirement: {
    type: String,
    require: true,
  },
  technology: {
    type: String,
    require: true,
  },
  locationAfterGrad: {
    type: String,
    require: true,
  },
  spaceRequirement: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

incubationSchema.statics.findByCredentials = async (email) => {
  const incubation = await incubationS.findOne({ email: email });

  if (!incubation) {
    throw "Incubation details not found";
  }
  return incubation;
};

const incubationS = mongoose.model("incubationS", incubationSchema);

module.exports = incubationS;
