const express = require("express");
const router = express.Router();

const TnkbRoute = (tnkbController) => {
  const { insert, select, update, deleteTnkb } = tnkbController();

  router.post("/", insert);
  router.get("/", select);
  router.put("/:id", update);
  router.delete("/:id", deleteTnkb);

  return router;
};

module.exports = TnkbRoute;
