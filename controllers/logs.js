const express = require("express");
const logRouter = express.Router();
const CaptainsLog = require("../models/logs");

// ===index===
logRouter.get("/", (req, res) => {
  CaptainsLog.find({}, (err, allLogs) => {
    res.render("index.ejs", {
      logs: allLogs,
    });
  });
});

// ===new===
logRouter.get("/new", (req, res) => {
  res.render("new.ejs");
});

// ===create===
logRouter.post("/", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  CaptainsLog.create(req.body, (err, createdLog) => {
    console.log(createdLog);
    res.redirect("/logs");
  });
});

// ===show===

module.exports = logRouter;
