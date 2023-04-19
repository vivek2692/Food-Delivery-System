const router = require("express").Router();

const {CreateFeedback, GetAllFeedback} = require("../controllers/FeedbackController");

router.post("/create", CreateFeedback);
router.get("/get-all", GetAllFeedback);

module.exports = router;