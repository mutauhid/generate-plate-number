const Tnkb = require("../tnkb.model");

const TnkbDto = (result, index = 0) => {
  return Tnkb(
    result.rows[index].id,
    result.rows[index].name,
    result.rows[index].address,
    result.rows[index].no_plat,
    result.rows[index].regency_id,
    result.rows[index].vehicle_id,
    result.rows[index].startdate,
    result.rows[index].expireddate
  );
};

const dtoTnkb = (result, index = 0) => {
  return {
    id: result.rows[index].id,
    name: result.rows[index].name,
    address: result.rows[index].address,
    no_plat: result.rows[index].no_plat,
    wilayah: result.rows[index].wilayah,
    type_kendaraan: result.rows[index].type_kendaraan,
    startdate: result.rows[index].startdate,
    expiredDate: result.rows[index].expireddate,
  };
};

module.exports = { TnkbDto, dtoTnkb };
