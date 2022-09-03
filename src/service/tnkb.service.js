const TnkbService = (TnkbRepository) => {
  const { insert, select, update, deleteTnkb } = TnkbRepository;

  const register = async (payload) => {
    try {
      return await insert(payload);
    } catch (err) {
      throw err;
    }
  };

  const get = async (name, no_plat) => {
    try {
      return await select(name, no_plat);
    } catch (err) {
      throw err;
    }
  };

  const updateTnkb = async (id, payload) => {
    try {
      return await update(id, payload);
    } catch (err) {
      throw err;
    }
  };

  const tnkbDelete = async (id) => {
    try {
      return await deleteTnkb(id);
    } catch (err) {
      throw err;
    }
  };
  return {
    register,
    get,
    updateTnkb,
    tnkbDelete,
  };
};

module.exports = TnkbService;
