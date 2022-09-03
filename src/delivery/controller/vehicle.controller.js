const Response = require("../../utils/response");

const VehicleController = () => {
  const insert = async (req, res) => {
    try {
      const payload = req.body;
      const vehicle = await req.service.register(payload);
      res.json(Response().successMessage(res.statusCode, "SUCCES", vehicle));
    } catch (err) {
      res.json(Response().successMessage("XX", err.message));
    }
  };

  const select = async (req, res) => {
    try {
      const vehicle = await req.service.get();
      res.json(Response().successMessage(res.statusCode, "SUCCES", vehicle));
    } catch (err) {
      res.json(Response().successMessage("XX", err.message));
    }
  };

  return { insert, select };
};

module.exports = VehicleController;
