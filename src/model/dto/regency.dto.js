const Regency = require("../regency.model");

const RegencyDto = (result, index = 0) => {
  return Regency(
    result.rows[index].id,
    result.rows[index].name,
    result.rows[index].regional_plat,
    result.rows[index].type_plat
  );
};

module.exports = RegencyDto;
