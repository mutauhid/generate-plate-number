const VehicleService = (VehicleRepository) => {
  const { insert, select } = VehicleRepository;

  const register = async (payload) => {
    try {
      return await insert(payload);
    } catch (err) {
      return err.message;
    }
  };

  const get = async () => {
    try {
      return await select();
    } catch (err) {
      return err.message;
    }
  };

  return {
    register,
    get,
  };
};

module.exports = VehicleService;
