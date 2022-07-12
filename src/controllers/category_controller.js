const categoryService = require("../services/category_services");
const category_controller = {
  getAll: async (req, res) => {
    const { data, status } = await categoryService.getAll(req.query);
    res.status(status).json(data);
  },
};

module.exports = category_controller;
