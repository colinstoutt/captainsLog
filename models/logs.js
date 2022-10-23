const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  title: { type: String, required: true },
  entry: { type: String, required: true },
  shipIsBroken: Boolean,
});

const CaptainsLog = mongoose.model("CaptainsLog", logSchema);
module.exports = CaptainsLog;
