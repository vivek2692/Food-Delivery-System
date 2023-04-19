const router = require("express").Router();

const {CreateMail, GetAllMails} = require("../controllers/MailController");

router.post("/create", CreateMail);
router.get("/get-all", GetAllMails);

module.exports = router;