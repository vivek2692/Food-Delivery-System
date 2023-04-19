const router = require("express").Router();

const {GetAllUsers, DeleteUser, GetUser} = require("../controllers/UserController");

router.get("/get-all", GetAllUsers);
router.get("/delete/:id", DeleteUser);
router.get("/find/:id", GetUser);

module.exports = router;
