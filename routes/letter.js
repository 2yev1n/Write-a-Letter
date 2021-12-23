const router = require("express")();
const controller = require("../controller/letter");

router.post("/:bag_id/letter", controller.writeletter);
router.get("/:bag_id/letter", controller.CountLetter);

module.exports = router;