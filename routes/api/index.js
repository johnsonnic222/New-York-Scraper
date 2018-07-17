var router = require("express").Router();
var headlineRoutes = require("./headlines");

router.use("/headlines", headlineRoutes);

module.exports = router;