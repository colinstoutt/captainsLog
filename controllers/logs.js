const express = require("express");
const logRouter = express.Router();
const CaptainsLog = require("../models/logs");

//// ===INDUCES===
// ===index===
logRouter.get("/", (req, res) => {
  res.render("index.ejs");
});
// ===new===
logRouter.get("/new", (req, res) => {
  res.render("new.ejs");
});
// ===create===
logRouter.post("/", (req, res) => {
  res.send(req.body);
  if (req.body.shipIsBroken === "on") {
    //if checked, req.body.completed is set to 'on'
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  //   CaptainsLog.create(req.body, (error, createdLog) => {
  //     res.redirect("/captains-log");
  //   });
});

module.exports = logRouter;
