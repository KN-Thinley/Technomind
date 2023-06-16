const mongoose = require("mongoose");

// require("dotenv").config({ path: "../configuration/config.env" });
// const DB = process.env.DATABASE;

//connecting the database
mongoose
  .connect(
    "mongodb+srv://technomind:technomind123@technomind.fcmbk72.mongodb.net/Technomind?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  // if the connections gets a success message

  .then((con) => {
    console.log("Database connected successfully");
  })

  .catch((error) => {
    console.log(DB);
    console.error(error);
  });
