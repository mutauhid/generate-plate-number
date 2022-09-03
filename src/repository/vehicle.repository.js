const dbQuery = require("../config/db.query");
const vehicleDto = require("../model/dto/vehicle.dto");

const VehicleRepository = (db) => {
  const insert = async (payload) => {
    try {
      const result = await db.query(dbQuery().INSERT_VEHICLE, [
        payload.name,
        payload.type_plat,
      ]);
      return vehicleDto(result);
    } catch (err) {
      return err.message;
    }
  };

  const select = async () => {
    try {
      const result = await db.query(dbQuery().GET_VEHICLE);
      const vehicle = [];
      for (let i = 0; i < result.rows.length; i++) {
        vehicle.push(vehicleDto(result, i));
      }
      return vehicle;
    } catch (err) {
      return err.message;
    }
  };

  return {
    insert,
    select,
  };
};

module.exports = VehicleRepository;
