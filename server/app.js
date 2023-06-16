const express = require("express");
const app = express();

//directory match
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//serves static pages
app.use(express.static(path.join(__dirname, "/view")));

// database
require("./database/mongoose");

// routes
const adminRouter = require("./route/adminRoute");
const userRouter = require("./route/userRoute");
const incubationRouter = require("./route/incubationRoute");

app.use(userRouter);
app.use(adminRouter);
app.use(incubationRouter);

module.exports = app;
