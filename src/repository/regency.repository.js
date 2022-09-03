const dbQuery = require("../config/db.query");
const RegencyDto = require("../model/dto/regency.dto");

const RegencyRepository = (db) => {
  const insert = async (payload) => {
    try {
      const result = await db.query(dbQuery().INSERT_REGENCY, [
        payload.name,
        payload.regional_plat,
        payload.type_plat,
      ]);
      return RegencyDto(result);
    } catch (err) {
      return err.message;
    }
  };

  const select = async () => {
    try {
      const result = await db.query(dbQuery().GET_REGENCY);
      const regency = [];
      for (let i = 0; i < result.rows.length; i++) {
        regency.push(RegencyDto(result, i));
      }
      return regency;
    } catch (err) {
      return err.message;
    }
  };

  return {
    insert,
    select,
  };
};

module.exports = RegencyRepository;
