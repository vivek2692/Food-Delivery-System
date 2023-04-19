const router = require("express").Router();

const {CreateCategory, GetAllCat} = require("../controllers/CategoryController");

router.post("/create", CreateCategory);
router.get("/get-all", GetAllCat);

module.exports = router;