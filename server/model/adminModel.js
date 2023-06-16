const express = require("express");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
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
  password: {
    type: String,
    require: true,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot contain the word password init");
      }
    },
  },
});

adminSchema.statics.findbyCredentials = async (email, password) => {
  const admin = await adminS.findOne({ email: email });

  if (!admin) {
    throw "Admin not found";
  }
  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    throw "Invalid Password";
  }
  return admin;
};

// pre for before and post for after

adminSchema.pre("save", async function (next) {
  // this refers to individual
  const admin = this;
  if (admin.isModified("password")) {
    admin.password = await bcrypt.hash(admin.password, 8);
  }
  next();
});

const adminS = mongoose.model("adminS", adminSchema);
module.exports = adminS;
