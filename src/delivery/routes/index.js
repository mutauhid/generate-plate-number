const express = require("express");
const db = require("../../config/db");

const RegencyRepository = require("../../repository/regency.repository");
const RegencyService = require("../../service/regency.service");
const RegencyController = require("../controller/regency.controller");
const RegencyRoute = require("./regency.route");

const VehicleRepository = require("../../repository/vehicle.repository");
const VehicleService = require("../../service/vehicle.service");
const VehicleController = require("../controller/vehicle.controller");
const VehicleRoute = require("../routes/vehicle.route");
const TnkbRoute = require("./tnkb.route");
const TnkbController = require("../controller/tnkb.controller");
const TnkbService = require("../../service/tnkb.service");
const TnkbRepository = require("../../repository/tnkb.repository");

const router = express.Router();

const regencyService = (req, res, next) => {
  req.service = RegencyService(RegencyRepository(db));
  next();
};

const vehicleService = (req, res, next) => {
  req.service = VehicleService(VehicleRepository(db));
  next();
};
const tnkbService = (req, res, next) => {
  req.service = TnkbService(TnkbRepository(db));
  next();
};

router.use("/api/regency", regencyService, RegencyRoute(RegencyController));
router.use("/api/vehicle", vehicleService, VehicleRoute(VehicleController));
router.use("/api/tnkb", tnkbService, TnkbRoute(TnkbController));

module.exports = router;
