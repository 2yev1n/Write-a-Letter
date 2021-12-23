const router = require("express")();
const controller = require("../controller/user");

router.post("/", controller.sign_up);
router.post("/login", controller.login);

module.exports = router;