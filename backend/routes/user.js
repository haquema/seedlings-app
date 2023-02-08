const express = require('express');
const TokensController = require('../controllers/tokenController');

const {
  loginUser,
  signupUser,
  getProfile,
  updateProfile,
} = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.get('/:id', getProfile);
router.patch('/:id', updateProfile);

module.exports = router;
