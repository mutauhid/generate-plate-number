const express = require("express");
const router = express.Router();

const RegencyRoute = (regencyController) => {
  const { insert, select } = regencyController();

  router.get("/", select);
  router.post("/", insert);

  return router;
};

module.exports = RegencyRoute;
