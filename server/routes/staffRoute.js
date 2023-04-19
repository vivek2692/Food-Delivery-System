const router = require("express").Router();

const {GetAllStaff, CreateStaff, GetOneStaff} = require("../controllers/StaffController");

router.get("/get-all", GetAllStaff);
router.post("/create", CreateStaff);
router.get("/find/:id", GetOneStaff);

module.exports = router;
