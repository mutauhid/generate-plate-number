const dbQuery = () => {
  const INSERT_REGENCY = `INSERT INTO master.regency (name, regional_plat, type_plat) VALUES ($1,$2,$3) RETURNING *`;
  const GET_REGENCY = `SELECT * FROM master.regency ORDER BY id`;
  const UPDATE_REGENCY = `UPDATE master.regency SET name=$1, regional_plat=$2, type_plat=$3 RETURNING *`;
  const GET_ID_REGENCY = "SELECT * FROM master.regency WHERE id=$1";

  const INSERT_VEHICLE = `INSERT INTO master.vehicle (name, type_plat) VALUES ($1,$2) RETURNING *`;
  const GET_VEHICLE = `SELECT * FROM master.vehicle ORDER BY id`;
  const UPDATE_VEHICLE = `UPDATE master.vehicle SET name=$1, type_plat=$2`;
  const GET_ID_VEHICLE = "SELECT * FROM master.vehicle WHERE id=$1";

  const INSERT_TNKB = `INSERT INTO tnkb (name, address, no_plat, regency_id, vehicle_id, startDate, expiredDate) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`;
  const GET_TNKB = `SELECT t.id, t.name, t.address, t.no_plat, mr.name as wilayah, mv.name as type_kendaraan, t.startdate, t.expireddate
  FROM tnkb as t 
  join master.regency as mr on t.regency_id = mr.id
  join master.vehicle as mv on t.vehicle_id = mv.id`;
  const UPDATE_TNKB =
    "UPDATE tnkb SET name =$1, address=$2, regency_id=$3, vehicle_id=$4 WHERE id=$5 RETURNING *";
  const GET_BY_PARAM_TNKB = `SELECT t.name, t.address, t.no_plat, mr.name as wilayah, mv.name as type_kendaraan, t.startdate, t.expireddate
  FROM tnkb as t 
  join master.regency as mr on t.regency_id = mr.id
  join master.vehicle as mv on t.vehicle_id = mv.id
  WHERE t.name ILIKE $1 OR t.no_plat ILIKE $2`;
  const GET_BY_2PARAM_TNKB = `SELECT t.name, t.address, t.no_plat, mr.name as wilayah, mv.name as type_kendaraan, t.startdate, t.expireddate
  FROM tnkb as t 
  join master.regency as mr on t.regency_id = mr.id
  join master.vehicle as mv on t.vehicle_id = mv.id
  WHERE t.name ILIKE $1 AND t.no_plat ILIKE $2`;
  const DELETE_TNKB = `DELETE FROM tnkb WHERE id=$1`;

  return {
    INSERT_REGENCY,
    GET_REGENCY,
    UPDATE_REGENCY,
    INSERT_VEHICLE,
    GET_VEHICLE,
    UPDATE_VEHICLE,
    INSERT_TNKB,
    GET_TNKB,
    GET_ID_REGENCY,
    GET_ID_VEHICLE,
    UPDATE_TNKB,
    GET_BY_PARAM_TNKB,
    GET_BY_2PARAM_TNKB,
    DELETE_TNKB,
  };
};

module.exports = dbQuery;
