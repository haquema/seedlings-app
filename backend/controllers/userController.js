const TokenGenerator = require('../models/token_generator');
const User = require('../models/user_model');

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};


const signupUser = async (req, res) => {
  const { username, password, email, fullName, address } = req.body;
  try {
    const user = await User.signup(
      username,
      password,
      email,
      fullName,
      address
    );
   
    res.status(201).json({email});
  } catch (error) {
    
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = await TokenGenerator.jsonwebtoken(user.id);
    res.status(200).json({ token: token, user: user, message: 'OK' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProfile = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  const token = await TokenGenerator.jsonwebtoken(req.user_id);
  res.status(200).json({ message: 'OK', token: token, user: user });
}


module.exports = { signupUser, loginUser, getProfile };
