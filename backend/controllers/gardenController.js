const TokenGenerator = require("../models/token_generator");
const User = require("../models/user_model");
const Plant = require("../models/plant_model");
const { mongoose } = require("mongoose");

const profileGarden = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).populate("userGardenPatch");
  const token = await TokenGenerator.jsonwebtoken(req.user_id);

  res
    .status(200)
    .json({ message: "OK", token: token, garden: user.userGardenPatch });
};

const addPlant = async (req, res) => {
  const { id } = req.params;
  const { plant_id } = req.body;
  const plantToAdd = await Plant.findById(plant_id);
  const user = await User.findOneAndUpdate(
    { _id: id },
    {
      $push: { userGardenPatch: plantToAdd },
    }
  );
  const token = await TokenGenerator.jsonwebtoken(req.user_id);

  res
    .status(200)
    .json({ message: "OK", token: token, garden: user.userGardenPatch });
};

//DELETE single plant from garden

const deletePlantFromGarden = async (req, res) => {
  const { userid } = req.params;
  const { plantid } = req.params;

  try {
    const user = await User.findOneAndUpdate(
      { _id: userid },
      {
        $pull: { userGardenPatch: plantid },
      },
      { new: true }
    );

    const token = await TokenGenerator.jsonwebtoken(req.params.userid);
    res
      .status(200)
      .json({ message: "OK", token: token, garden: user.userGardenPatch });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  profileGarden,
  addPlant,
  deletePlantFromGarden,
};
