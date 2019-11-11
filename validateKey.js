const moment = require('moment')
const users = require('./users')

const  validateKey = ((req, res, next) => {
    const { key } = req.query;
    const timeStamp = moment().format("x");
    if (!users[key]) return res.status(401).send("Unauthorized user");
    if (timeStamp - 60000 > users[key]) {
      delete users[key];
      return res.send("Your key is expierd/Unauthorized user");
    }
    next();
  });

  module.exports = validateKey;