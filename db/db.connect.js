const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://neoGStudent:uGjTnOpMJ3CBgkJO@neog.trumma1.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });
