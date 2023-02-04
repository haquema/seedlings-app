const express = require("express");
const TokensController = require("../controllers/tokenController");

const { loginUser, signupUser, getProfile, deletePlantFromGarden } = require('../controllers/userController')

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/:id", getProfile);


module.exports = router;

