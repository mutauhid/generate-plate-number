const Response = require("../../utils/response");

const RegencyController = () => {
  const insert = async (req, res) => {
    try {
      const payload = req.body;
      const regency = await req.service.register(payload);
      res.json(Response().successMessage(res.statusCode, "SUCCES", regency));
    } catch (err) {
      res.json(Response().successMessage("XX", err.message));
    }
  };

  const select = async (req, res) => {
    try {
      const regency = await req.service.get();
      res.json(Response().successMessage(res.statusCode, "SUCCES", regency));
    } catch (err) {
      res.json(Response().successMessage("XX", err.message));
    }
  };

  return { insert, select };
};

module.exports = RegencyController;
