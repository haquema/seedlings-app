const express = require("express");
const router = express.Router();
const TokensController = require("../controllers/tokenController");

const { loginUser, signupUser } = require('../controllers/userController')

router.post("/signup", signupUser);
router.post("/login", loginUser);


module.exports = router;