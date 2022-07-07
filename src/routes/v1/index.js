const { Router } = require("express");
const router = Router();

router.use("/category", require("./category_router"));

module.exports = router;
