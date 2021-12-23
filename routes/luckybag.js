const router = require("express")();
const controller = require("../controller/luckybag");
const verifyToken = require("../middleware/token");

router.post("/", verifyToken, controller.createLuckybag);
router.get("/", verifyToken, controller.ViewLuckybag);

module.exports = router;