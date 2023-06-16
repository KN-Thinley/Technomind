const mongoose = require("mongoose");

// require("dotenv").config({ path: "../configuration/config.env" });
// const DB = process.env.DATABASE;

//connecting the database
mongoose
  .connect("mongodb://localhost:27017/technomind", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // if the connections gets a success message

  .then((con) => {
    console.log("Database connected successfully");
    // const userS = require("../model/userModel");
  })

  .catch((error) => {
    console.log(DB);
    console.error(error);
  });
