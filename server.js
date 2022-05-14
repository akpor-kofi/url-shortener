const mongoose = require("mongoose");
const app = require("./app");

const port = process.env.PORT || 3000;

mongoose
  .connect(
    "mongodb+srv://akpor:12345@cluster0.vtmx4.mongodb.net/urlShortener?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB connection established"))
  .catch((err) => console.log("Error connecting to DB"));

app.listen(port, () => console.log("listening"));
