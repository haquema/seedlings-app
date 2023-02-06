const express = require("express");
const TokensController = require("../controllers/tokenController");

const { loginUser, signupUser, getProfile, updateProfile } = require('../controllers/userController')

const router = express.Router();

// POST add a user to the users collection
router.post("/signup", signupUser);

// POST login a user to the app
router.post("/login", loginUser);

// GET a profile page for a specific user
router.get("/:id", getProfile);

// PATCH update a user profile details
router.patch("/:id", updateProfile)


module.exports = router;

