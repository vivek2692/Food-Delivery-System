const router = require("express").Router();

const {GetAll, CreateDeliveryBoy, GetOne} = require("../controllers/DeliveryBoyController");

router.get("/get-all", GetAll);
router.post("/create", CreateDeliveryBoy);
router.get("/find/:id", GetOne);

module.exports = router;
