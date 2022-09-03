const generateRandomString = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  const charactersLength = characters.length;
  result += characters.charAt(Math.floor(Math.random() * charactersLength));

  return result;
};

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateNoPlat = (regency_id, vehicle_id) => {
  let no_plat = "";
  let randomNumber = getRandomNumberBetween(1000, 9999);
  let randomString = generateRandomString(1);

  no_plat = `${regency_id} ${randomNumber} ${regency_id}${vehicle_id}${randomString}`;
  return no_plat;
};

module.exports = generateNoPlat;
