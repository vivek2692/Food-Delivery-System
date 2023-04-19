const router = require("express").Router();

const {CreateFood, GetAllFoodItems, GetAdminFood, DeleteFood, GetFood} = require("../controllers/FoodItemController");

router.post("/create", CreateFood);
router.get("/get-all-food", GetAllFoodItems);
router.get("/get-admin-food", GetAdminFood);
router.get("/delete/:id", DeleteFood);
router.get("/find/:id", GetFood);

module.exports = router;