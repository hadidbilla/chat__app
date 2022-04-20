const express = require("express");

const router = express.Router();

//internal imports
const { getUsers } = require("../controller/usersController");

//login Router

router.get("/users", getUsers);

module.exports = router;
