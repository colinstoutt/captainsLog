const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const logController = require("./controllers/logs");

require("dotenv").config();
const PORT = process.env.PORT;
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use("/logs", logController);

const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("Mongo Connected"));
db.on("disconnected", () => console.log("Mongo Disconnected"));

app.listen(PORT, () => console.log(`Captains Log Active(${PORT})`));
