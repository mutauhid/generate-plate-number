const express = require("express");
const router = express.Router();

const VehicleRoute = (vehicleController) => {
  const { insert, select } = vehicleController();

  router.get("/", select);
  router.post("/", insert);

  return router;
};

module.exports = VehicleRoute;
