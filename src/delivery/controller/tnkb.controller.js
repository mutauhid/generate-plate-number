const Response = require("../../utils/response");

const TnkbController = () => {
  const insert = async (req, res) => {
    try {
      const payload = req.body;
      const tnkb = await req.service.register(payload);
      res.json(Response().successMessage(res.statusCode, "SUCCES", tnkb));
    } catch (err) {
      res.json(Response().successMessage("400", err));
    }
  };

  const select = async (req, res) => {
    try {
      const name = req.query.name;
      const no_plat = req.query.no_plat;
      const tnkb = await req.service.get(name, no_plat);
      res.json(Response().successMessage(res.statusCode, "SUCCES", tnkb));
    } catch (err) {
      res.json(Response().successMessage("400", err));
    }
  };

  const update = async (req, res) => {
    try {
      const id = req.params.id;
      const payload = req.body;
      const tnkb = await req.service.updateTnkb(id, payload);
      res.json(Response().successMessage(res.statusCode, "SUCCES", tnkb));
    } catch (err) {
      res.json(Response().successMessage("400", err));
    }
  };

  const deleteTnkb = async (req, res) => {
    try {
      const id = req.params.id;
      const tnkb = await req.service.tnkbDelete(id);
      res.json(Response().successMessage(res.statusCode, "SUCCES", tnkb));
    } catch (err) {
      throw err;
    }
  };

  return { insert, select, update, deleteTnkb };
};

module.exports = TnkbController;
