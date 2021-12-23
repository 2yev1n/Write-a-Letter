const router = require("express")();

const user = require("./user");
const luckybag = require("./luckybag");
const letter = require("./letter");

router.use("/user", user);
router.use("/luckybag", letter);
router.use("/luckybag", luckybag);

module.exports = router;