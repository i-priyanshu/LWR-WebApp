require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

//import routes
const blogRoutes = require("./routes/blog.js");

// ! DB Connection
const URI = process.env.DB_URI;
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//My Routes
app.use("/api", blogRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App Listening at http://localhost:${port}`);
});
