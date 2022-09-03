module.exports = Tnkb = (
  id,
  name,
  address,
  no_plat,
  regency_id,
  vehicle_id,
  startdate,
  expireddate
) => {
  return {
    id,
    name,
    address,
    no_plat,
    regency_id,
    vehicle_id,
    startdate,
    expireddate,
  };
};
