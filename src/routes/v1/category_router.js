const category_controller = require("../../controllers/category_controller");
const router = require("express").Router();

router.get("", category_controller.getAll);

module.exports = router;
