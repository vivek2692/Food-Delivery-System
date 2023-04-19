const router = require("express").Router();

const {RegisterUser, LoginUser} = require("../controllers/UserController");

router.post("/sign-up", RegisterUser);
router.post("/sign-in", LoginUser);

module.exports = router;