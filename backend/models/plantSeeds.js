const mongoose = require('mongoose');
const Plant = require('./plant_model');

const mongoDbUrl =
  'mongodb+srv://Anthony-O:CC8txqzZ16v2lcra@cluster0.61xuyqe.mongodb.net/seedlings';

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

const plants = [
  {
    img: 'https://images.immediate.co.uk/production/volatile/sites/10/2018/08/2048x1365-GG-Coleus-LI3139977-b0a0b30.jpg?quality=90&webp=true&resize=940,627',
    name: 'Common Coleus',
    knownAs: 'Coleus blumei',
    description:
      'The common coleus is a plant that comes in a wide range of colors and leaf forms. This plant is native to Southeast Asia and is used as an herbal remedy in various cultures. Common coleus is a narcotic used by the Mazatec people of Mexico. In Cuba, this plant is considered invasive',
    toxicTo:
      'Exposure to the common coleus could cause anything from a mild to a life-threatening reaction in dogs. The essential oil, present in all parts of the plant, is absorbed through the skin and typically causes mild skin irritation if a dog comes into contact with it',
    careimg:
      'https://drive.google.com/file/d/1BHWv_uypAgN0rBrM69b6Fdo50qmv8ZAD/view?usp=sharing',
    minTemp: 16,
    maxTemp: 24,
    habitat: 'Steep slopes,roadsides,coffee plantations',
    pruning: 'Remove withered flowers after flowering',
  },

  {
    img: 'https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1618420140/nfruhkfvmlxdpyih5ahj.jpg',
    name: 'Snake Plant',
    knownAs: "Viper's bowstring hemp",
    description:
      'Snake plant can be considered part house plant and part architectural display, as its sword-like leaves with bold striping patterns are distinctive and eye-catching',
    toxicTo: 'Slightly toxic to humans, toxic to dogs and cats',
    careimg:
      'https://drive.google.com/file/d/1voeZkbq--vFMHNbH1u8aMl9CC3jv-sFg/view?usp=sharing',
    minTemp: 16,
    maxTemp: 24,
    habitat:
      'Roadsides, abandoned gardens, waste areas, disturbed sites, coastal environs, open woodlands, riparian vegetation, the margins of closed forests',
    pruning: 'Trim the diseased, withered leaves once a month',
  },

  {
    img: 'https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1618414072/fmefyqaec1aotf2esl4y.jpg',
    name: 'Swiss Cheese Plant',
    knownAs: 'Fruit salad plant, Mexican breadfruit',
    description:
      "The swiss cheese plant produces bright, glossy leaves and makes a popular house plant. It is originally native to tropical forest regions in Central America. The nickname swiss cheese plant refers to the small holes that develop in the plant's leaves. The long fruits resemble corncobs and smell sweet and fragrant when ripe",
    toxicTo: 'Slightly toxic to humans, toxic to dogs and cats',
    careimg:
      'https://drive.google.com/file/d/1bfxeI-jpSk9LQqY4yLghoeUmJHUaF7sp/view?usp=sharing',
    minTemp: 18,
    maxTemp: 27,
    habitat: 'Forests',
    pruning: 'Trim the dead, diseased,overgrown branches in winter',
  },
];

connectToMongoDb(mongoDbUrl);

seedDB(Plant, plants).then(() => {
  console.log('Database seeded!');
  mongoose.connection.close();
});
