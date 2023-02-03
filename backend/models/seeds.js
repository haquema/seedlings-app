const mongoose = require('mongoose');
const Plant = require('./plant_model');
const User = require('./user_model');

const mongoDbUrl =
  'mongodb+srv://Anthony-O:CC8txqzZ16v2lcra@cluster0.61xuyqe.mongodb.net/seedling';

const connectToMongoDb = (dbUrl) => {
  mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`Successfully connected to MongoDB (${dbUrl})`))
    .catch((error) => {
      throw new Error(`Something went wrong (${error.message})`);
    });
};

const seedDB = async (model, data) => {
  await model.deleteMany({});
  await model.insertMany(data);
};

const users = [
  {
    username: 'john123',
    password: '123',
    email: 'john@john.com',
    fullName: 'John Oak',
    address: 'Milton\nInvergordon\nRoss Shire\nIV18 0NQ',
    userGardenPatch: [],
  },
];

const plants = [
  {
    img: 'http://www.tropicopia.com/house-plant/thumbnails/5556.jpg',
    use: 'Potted plant',
    latinName: "Dracaena deremensis 'Janet Craig'",
    lightTolered: 'Diffuse light ( Less than 5,300 lux / 500 fc)',
    heightAtPurchase: 91,
    lightIdeal: 'Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)',
    widthAtPurchase: 91,
    id: '53417c12-4824-5995-bce0-b81984ebbd1d',
    widthPotential: 122,
    family: 'Liliaceae',
    heightPotential: 366,
    description: null,
    temperatureMax: 30,
    watering: 'Keep moist between watering & Can dry between watering',
    commonName: ['Janet Craig'],
    temperatureMin: 10,
    colorOfLeaf: ['Dark green'],
    climate: 'Tropical',
  },

  {
    img: 'http://www.tropicopia.com/house-plant/thumbnails/5491.jpg',
    use: 'Table top',
    latinName: 'Anthurium X',
    lightTolered: 'Diffuse light ( Less than 5,300 lux / 500 fc)',
    heightAtPurchase: 21,
    lightIdeal: 'Strong light ( 21,500 to 3,200 lux/2000 to 300 fc)',
    widthAtPurchase: 30,
    id: '215b33f4-66d2-5601-b776-4501f2bd50b7',
    widthPotential: 61,
    family: 'Araceae',
    heightPotential: 61,
    description: null,
    temperatureMax: 22,
    watering: 'Water when soil is half dry & Can dry between watering',
    commonName: ['Tailflower', 'Wax flower'],
    temperatureMin: 18,
    colorOfLeaf: ['Medium green', 'Dark green'],
    climate: 'Tropical',
  },
];

connectToMongoDb(mongoDbUrl);

seedDB(Plant, plants)
  .then(() => seedDB(User, users))
  .then(() => {
    console.log('Database seeded!');
    mongoose.connection.close();
  });
