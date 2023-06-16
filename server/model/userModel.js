const express = require("express");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  profilePic: {
    type: String,
    default: "pic",
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
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
    required: true,
    trim: true,
    minlength: 8,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("password cannot be 'password'");
      }
    },
  },
  contact: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    require: true,
  },
  bio: {
    type: String,
    default: "",
  },
});

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await userS.findOne({ email: email });

  if (!user) {
    throw "User not found";
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw "Invalid Password";
  }
  return user;
};

// pre for before and post for after
userSchema.pre("save", async function (next) {
  //this refers to individual
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const userS = mongoose.model("userS", userSchema);

module.exports = userS;
