const TokenGenerator = require('../models/token_generator');
const User = require('../models/user_model');
const Plant = require('../models/plant_model');

const profileGarden = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).populate('userGardenPatch');
  const token = await TokenGenerator.jsonwebtoken(req.user_id);

  res.status(200).json({ message: 'OK', token: token, garden: user.userGardenPatch });
}

const addPlant = async (req, res) => {
  const { id } = req.params;
  const { plant_id } = req.body;
  const plantToAdd = await Plant.findById(plant_id);
  const user = await User.findOneAndUpdate({_id: id}, {
    $push:{"userGardenPatch":plantToAdd}
  });
  const token = await TokenGenerator.jsonwebtoken(req.user_id);


  res.status(200).json({ message: 'OK', token: token, garden: user.userGardenPatch });
}

module.exports = {
  profileGarden,
  addPlant
};