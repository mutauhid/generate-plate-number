const Vehicle = require("../vehicle.model");

const VehicleDto = (result, index = 0) => {
  return Vehicle(
    result.rows[index].id,
    result.rows[index].name,
    result.rows[index].type_plat
  );
};

module.exports = VehicleDto;
