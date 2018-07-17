var router = require("express").Router();
var headlineController = require("../../controllers/headline");

router.get("/", headlineController.findAll);
router.delete("/:id", headlineController.delete);


module.exports = router;