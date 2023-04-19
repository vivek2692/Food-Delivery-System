const router = require("express").Router();

const {CreateOrder, GetAllOrders, DeleteOrder, CompletePayment, GetAllPayments, GetAllSales} = require("../controllers/OrderController");

router.post("/create", CreateOrder);
router.get("/get-all", GetAllOrders);
router.get("/delete/:id", DeleteOrder);
router.put("/payment/:id", CompletePayment);
router.get("/payment", GetAllPayments);
router.get("/sales", GetAllSales);

module.exports = router;