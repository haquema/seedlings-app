const TokenGenerator = require('../models/token_generator');
const User = require('../models/user_model');
const Plant = require('../models/plant_model');

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

    res.status(201).json({ email });
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
};

const updateProfile = async (req, res) => {
  const { id } = req.params;
  const { email, username, fullName, address, password } = req.body;

  //validating email entries
  // if (!validator.isEmail(email)) {
  //   return res.status(400).json({error: "Email not valid"});
  // }
  // const exists = await User.findOne({ email });
  // if (exists) {
  //   return res.status(400).json({error: "Email already in use"});
  // }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await User.findByIdAndUpdate(
    { _id: id },
    {
      email,
      username,
      fullName,
      address,
      password: hash,
    }
  );

  const updatedUser = await User.findById(id);

  // if (!user) {
  //   return res.status(400).json({error: 'No such user'})
  // }
  res.status(200).json({ message: 'OK', user: updatedUser });
};

module.exports = { signupUser, loginUser, getProfile };
