const express = require("express");
const router = express.Router();
const moment = require("moment");
const users = require('../users')
const flightsRouter = require("./flights");
const logger = require("../utils/logger");

router.use("/Register", (req, res, next) => {
  const { userName, email, password, firstName, lastName } = req.body;
  if (!userName || !email || !password || !firstName || !lastName) {
    res.send("Some value is missing...");
  }
  if (!email.includes("@")) return res.send("Email address is not valid");
  next();
});

router.post("/Register", (req, res, next) => {
  const apiKey = getApiKey();
  const expiration = moment().format("x");

  users[apiKey] = expiration;

  logger.info(`Api Key: ${apiKey} was given to a user `);
  res.send(`Register success - your key is ${apiKey}`);
});

function getApiKey() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}



//router.get("/flights", flightsRouter);

module.exports = router;
