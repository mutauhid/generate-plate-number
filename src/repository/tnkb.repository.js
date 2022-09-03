const dbQuery = require("../config/db.query");
const { TnkbDto, dtoTnkb } = require("../model/dto/tnkb.dto");
const generateNoPlat = require("../utils/generate-no-plat");

const TnkbRepository = (db) => {
  const insert = async (payload) => {
    try {
      const getIdRegency = await db.query(dbQuery().GET_REGENCY);
      const regencyArr = [];
      for (let i = 0; i < getIdRegency.rows.length; i++) {
        regencyArr.push(getIdRegency.rows[i].id);
      }
      const vehicleArr = [];

      const getIdVehicle = await db.query(dbQuery().GET_VEHICLE);
      for (let i = 0; i < getIdVehicle.rows.length; i++) {
        vehicleArr.push(getIdVehicle.rows[i].id);
      }
      const getRegency = payload.regency_id;
      const getVehicle = payload.vehicle_id;
      if (!regencyArr.includes(getRegency)) {
        throw `Regency ID not found`;
      } else if (!vehicleArr.includes(getVehicle)) {
        throw `Vehicle ID not found`;
      } else {
        const startDate = new Date();
        const expiredDate = startDate.setFullYear(startDate.getFullYear() + 5);
        const regency = await db.query(dbQuery().GET_ID_REGENCY, [
          payload.regency_id,
        ]);
        const vehicle = await db.query(dbQuery().GET_ID_VEHICLE, [
          payload.vehicle_id,
        ]);
        const noPlat = generateNoPlat(
          regency.rows[0].regional_plat,
          regency.rows[0].type_plat,
          vehicle.rows[0].type_plat
        );
        const result = await db.query(dbQuery().INSERT_TNKB, [
          payload.name,
          payload.address,
          noPlat,
          payload.regency_id,
          payload.vehicle_id,
          new Date(),
          new Date(expiredDate),
        ]);
        return TnkbDto(result);
      }
    } catch (err) {
      throw err;
    }
  };

  const select = async (name, no_plat) => {
    try {
      let result = "";
      if (name && no_plat) {
        result = await db.query(dbQuery().GET_BY_2PARAM_TNKB, [name, no_plat]);
      } else if (name || no_plat) {
        result = await db.query(dbQuery().GET_BY_PARAM_TNKB, [name, no_plat]);
      } else {
        result = await db.query(dbQuery().GET_TNKB);
      }

      if (result.rowCount == 0) {
        throw `Name or No Plat Not Found`;
      } else {
        const tnkb = [];
        for (let i = 0; i < result.rows.length; i++) {
          tnkb.push(dtoTnkb(result, i));
        }
        return tnkb;
      }
    } catch (err) {
      throw err;
    }
  };

  const update = async (id, payload) => {
    try {
      const result = await db.query(dbQuery().UPDATE_TNKB, [
        payload.name,
        payload.address,
        payload.regency_id,
        payload.vehicle_id,
        id,
      ]);
      if (result.rowCount == 0) {
        throw `TNKB ID not found`;
      } else {
        return TnkbDto(result);
      }
    } catch (err) {
      throw err;
    }
  };

  const deleteTnkb = async (id) => {
    try {
      const result = await db.query(dbQuery().DELETE_TNKB, [id]);
      if (result.rowCount == 0) throw `TNKB ID not found`;

      return `TNKB with ID ${id} has been deleted`;
    } catch (err) {
      throw err;
    }
  };

  return {
    insert,
    select,
    update,
    deleteTnkb,
  };
};

module.exports = TnkbRepository;
