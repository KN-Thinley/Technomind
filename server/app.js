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
const announcementRouter = require("./route/announcementRoute");
const testimonialRouter = require("./route/testimonialRoute");

app.use(announcementRouter);
app.use(userRouter);
app.use(adminRouter);
app.use(incubationRouter);
app.use(testimonialRouter);

module.exports = app;
