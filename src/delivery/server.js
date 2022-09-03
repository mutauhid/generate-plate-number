const express = require("express");
const config = require("../config/config");
const appRoute = require("../delivery/routes/index");
const jsonMiddleware = require("../middleware/json.middleware");

require("dotenv").config();
const { port, host } = config();
const Server = () => {
  const app = express();

  app.use(jsonMiddleware);
  app.use(appRoute);
  app.listen(port, host, () => {
    console.info(`App server running on port ${port}`);
  });
};
module.exports = Server;
