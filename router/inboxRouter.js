const express = require("express");

const router = express.Router();

//internal imports
const { getInbox } = require("../controller/inboxController");

//login Router

router.get("/inbox", getInbox);

module.exports = router;
