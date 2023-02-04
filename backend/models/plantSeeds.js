const mongoose = require("mongoose");
const Plant = require("./plant_model");

const mongoDbUrl =
  "mongodb+srv://Anthony-O:CC8txqzZ16v2lcra@cluster0.61xuyqe.mongodb.net/seedlings";

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
    img: "https://cdn.thestem.co.uk/production/imager-transforms/digitaloceanspaces/product-images/plants/snake-plant-laurentii/134178/snake-plant-laurentii-in-curved-fiberclay-stone-plant-pot_46b8f3075629629ddc66a01cf289b97e.webp",
    name: "Snake Plant",
    knownAs: "Viper's bowstring hemp",
    description:
      "Snake plant can be considered part house plant and part architectural display, as its sword-like leaves with bold striping patterns are distinctive and eye-catching.These succulents are extremely easy to look after, are experts at purifying the air, and can also tolerate low light conditions making them one of the best plants for beginners or stress-free plant parenting",
    toxicTo: "Slightly toxic to humans, toxic to dogs and cats",
    careimg: "https://i.postimg.cc/fRXgMm44/share-21.png",
    minTemp: 16,
    maxTemp: 24,
    habitat:
      "Roadsides, abandoned gardens, waste areas, disturbed sites, coastal environs, open woodlands, riparian vegetation, the margins of closed forests",
    pruning: "Trim the diseased, withered leaves once a month",
  },

  {
    img: "https://cdn.thestem.co.uk/production/imager-transforms/digitaloceanspaces/product-images/plants/big-leaf-monstera/133375/swiss-cheese-plant-big-leaf-in-grey-lisbon-plant-pot_46b8f3075629629ddc66a01cf289b97e.webp",
    name: "Swiss Cheese Plant",
    knownAs: "Fruit salad plant, Mexican breadfruit",
    description:
      "Swiss Cheese Plants or Monstera deliciosa are lush green vine plants that will bring a tropical vibe in to your home. They soared to popularity in the 1970's due to their easy going nature, big splash impact, and beautiful dark green, fenestrated leaves that look almost like cheese",
    toxicTo: "non-toxic",
    careimg: "https://i.postimg.cc/85G22wsn/share-19.png",
    minTemp: 18,
    maxTemp: 27,
    habitat: "Forests",
    pruning: "Trim the dead, diseased,overgrown branches in winter",
  },

  {
    img: "https://cdn.thestem.co.uk/production/imager-transforms/digitaloceanspaces/product-images/plants/spider-plant/134195/spider-plant-in-tivoli-earth-plant-pot_46b8f3075629629ddc66a01cf289b97e.webp",
    name: "Spider Plant",
    knownAs: "Ribbon plant, St. Bernards lily, Spider ivy",
    description:
      "The spider plant is a green perennial plant with long, thin leaves that earn it another name, ribbon plant, It has spread far from its native Africa because it is easy to care for. Since spider plants grow well in partial or full shade, they have become popular houseplants",
    toxicTo: "non-toxic",
    careimg: "https://i.postimg.cc/B6TzNsv8/share-2.png",
    minTemp: 13,
    maxTemp: 27,
    habitat:
      "Undergrowth of forested river valleys, mountainous regions, thickets, steep embankments, flat terrain, cliffs",
    pruning: "Trim the diseased, withered leaves once a month",
  },

  {
    img: "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1564400743/products/aloe-vera-dc6702.jpg",
    name: "Aloe Vera",
    knownAs: "Chinese aloe, Wand of heaven, Burn aloe",
    description:
      "Aloe vera is an evergreen succulent species native to the Arabian Peninsula. The thick leaves are filled with gooey flesh that stores water for survival in its native desert territories. Aloe vera has become a popular houseplant and is also incorporated into a wide range of cosmetics and skin-care products",
    toxicTo: "non-toxic but not safe for consumption",
    careimg: "https://i.postimg.cc/k56JGfCg/alovera.png",
    minTemp: 13,
    maxTemp: 29,
    habitat: "Maritime sands, rocks",
    pruning: "Trim the diseased, withered leaves once a month",
  },

  {
    img: "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1617279245/r1i50rwizqtvn6zllpdh.jpg",
    name: "English Ivy",
    knownAs: "European Ivy, Ivy",
    description:
      "English ivy has beautiful variegated leaves and the ability to trail, hang or climb along almost any surface. It is also known as an air-purifying superstar and can live indoors or outdoors",
    toxicTo:
      "Medium-level toxicity for pets and humans from either ingestion or physical contact. All parts of the plant have toxic properties. Contact with the sap from the leaves or stem can cause inflammation of the skin, redness, itchiness, and blisters",
    careimg: "https://i.postimg.cc/nc066HGB/english-ivy-1.png",
    minTemp: 13,
    maxTemp: 18,
    habitat: "Woodlands, hedges, shady places",
    pruning: "Trim the dead, diseased, overgrown branches in winter",
  },

  {
    img: "https://cdn.thestem.co.uk/production/imager-transforms/digitaloceanspaces/product-images/plants/spotted-begonia/154288/Polka-Dot-Begonia-1_46b8f3075629629ddc66a01cf289b97e.webp",
    name: "Polka Dot Begonia",
    knownAs: "Spotty Begonia, Stained Glass Begonia",
    description:
      "The polka dot begonia is definitely an eye-catcher in any gardens. Generally, it requires warm temperatures and enjoys a bright shade. Although the taste of polka dot begonia is sour, some people eat them, even though they can be toxic when consumed in large amounts",
    toxicTo: "non-toxic",
    careimg: "https://i.postimg.cc/MT24yXz2/polka-dot.png",
    minTemp: 12,
    maxTemp: 27,
    habitat: "Atlantic forest",
    pruning: "Trim the diseased, withered leaves once a month",
  },

  {
    img: "https://cdn.thestem.co.uk/production/imager-transforms/digitaloceanspaces/product-images/plants/leopard-lily/134041/leopard-lily-in-elho-plant-pot_46b8f3075629629ddc66a01cf289b97e.webp",
    name: "Dieffenbachia",
    knownAs: "Dumb Cane",
    description:
      "A tropical plant with attractive large, green leaves with splashes of cream that fan out from its stem. It's a relatively easy going plant and is found naturally across the tropical Americas. They enjoy high humidity so would make a great plant for your bathroom or kitchen",
    toxicTo:
      "Considered to be toxic to humans and pets. The plant contains calcium oxalate crystals which can cause irritation and swelling of the mouth, lips, tongue and throat if ingested",
    careimg: "https://i.postimg.cc/JhBvDjV5/poison-arum.png",
    minTemp: 15,
    maxTemp: 30,
    habitat: "Edge of a wetland slough, trail up mountain, mature forest",
    pruning: "Trim the dead, diseased, overgrown branches in winter",
  },

  {
    img: "https://cdn.thestem.co.uk/production/imager-transforms/digitaloceanspaces/product-images/plants/moth-orchid-white/373671/resize_Moth-Orchid-White-1-0138_46b8f3075629629ddc66a01cf289b97e.webp",
    name: "Aphrodites Phalaenopsis",
    knownAs: "Moth orchid",
    description:
      "A stunning flowering orchid with bright white, long-lasting blooms that sit on top of its long elegant stem. Moth orchids are relatively easy to look after, they crave high humidity and bright indirect light, so an east or west facing bathroom or kitchen is perfect",
    toxicTo: "non-toxic",
    careimg: "https://i.postimg.cc/8cT003FZ/share-3.png",
    minTemp: 10,
    maxTemp: 30,
    habitat: "Primary and secondary forests",
    pruning: "Prune after flowering to encourage re-blooming",
  },

  {
    img: "https://cdn.thestem.co.uk/production/imager-transforms/digitaloceanspaces/product-images/plants/asparagus-fern/133367/Asparagus-Fern-dalton-pot_46b8f3075629629ddc66a01cf289b97e.webp",
    name: "Sprengers Asparagus Fern",
    knownAs: "Asparagus fern, African asparagus",
    description:
      "Sprenger's asparagus fern has elegant soft, feathery foliage cascading on wiry stems. While young plants start life in a compact shape, as they mature they develop into climbing plants",
    toxicTo: "non-toxic",
    careimg: "https://i.postimg.cc/qqQ5VLy4/share-4.png",
    minTemp: 15,
    maxTemp: 27,
    habitat: "Rocky shale slopes, coastal scrub, dry areas",
    pruning:
      "Lightly prune this plant periodically during the spring and summer",
  },

  {
    img: "https://cdn.thestem.co.uk/production/imager-transforms/digitaloceanspaces/product-images/plants/sweetheart-plant/372845/Hoya-Heart-1-0317_2023-01-31-152806_cjoy_46b8f3075629629ddc66a01cf289b97e.webp",
    name: "Sweetheart Plant",
    knownAs: "Valentine hoya, Hoya heart",
    description:
      "Potted sweetheart plant (Hoya kerrii) plants are often sold as a novelty gift for Valentine's day due to their heart-shaped leaf, most commonly with a tiny single leaf rooted in a little pot for tabletop decoration. If you can grow it into a longer vine, it makes a lovely hanging plant or trellis climber",
    toxicTo: "non-toxic",
    careimg: "https://i.postimg.cc/ZKMw80L7/share-15.png",
    minTemp: 15,
    maxTemp: 30,
    habitat: "Tropical forests",
    pruning: "Prune regularly to maintain shape",
  },

  {
    img: "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1659622912/j81jqgchtdjajkme8nlg.jpg",
    name: "African Spear",
    knownAs:
      "Bowstring hemp, Spear sansevieria, Dagger plant, Devils tongue, Saint Barbara sword",
    description:
      "The african spear (Sansevieria cylindrica) is a succulent houseplant that can grow up to 2 m tall. It has slender, upright leaves that are striped and resemble a snake. This species is a hardy succulent and can grow in conditions with low light. It adapts to dry, sunny locations with well-drained soil",
    toxicTo: "non-toxic",
    careimg: "https://i.postimg.cc/ZKMw80L7/share-15.png",
    minTemp: 10,
    maxTemp: 30,
    habitat: "Shrubs in open forests, rocky slopes, hills, fields, sheltered ravines",
    pruning: "Prune regularly to maintain shape",
  },

  {
    img: "https://cdn.thestem.co.uk/production/imager-transforms/digitaloceanspaces/product-images/plants/rubber-plant-robusta/134164/rubber-plant-robusta-in-tivoli-earth-plant-pot_46b8f3075629629ddc66a01cf289b97e.webp",
    name: "Rubber Plant",
    knownAs: "Rubber bush, Indian rubber plant",
    description:
      "The Rubber Plant Robusta is an extremely popular plant with attractive thick, rubbery deep green leaves. Part of the fig family, the Rubber plant is relatively easy to care for, and if kept in the right conditions, they can grow up to 3 meters tall",
    toxicTo: "non-toxic",
    careimg: "https://i.postimg.cc/pL5qqxG2/share-17.png",
    minTemp: 10,
    maxTemp: 30,
    habitat: "Hill forest, cliffs, limestone hills",
    pruning: "Prune in spring to control size",
  },

  {
    img: "https://cdn.shopify.com/s/files/1/1780/8157/products/Dracaena-sanderiana-Gold-12cm-Nebula.jpg?v=1655207785",
    name: "Lucky Bamboo",
    knownAs: "Belgian evergreen, Goddess of mercys plant",
    description:
      "Though its name suggests otherwise, the lucky bamboo is not actually a bamboo plant. It’s a type of tropical water lily that is thought to bring good luck and prosperity to the home or office. This plant is commonly used in Feng Shui, and the correct placement impacts the flow of positive energy",
    toxicTo: "non-toxic",
    careimg: "https://i.postimg.cc/0NgZ43F7/share-18.png",
    minTemp: 15,
    maxTemp: 30,
    habitat: "Tropical forest",
    pruning: "Prune regularly to maintain shape",
  },

  {
    img: "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1645196962/r83nvvqyms4w8m7lzjr5.jpg",
    name: "African Bonsai",
    knownAs: "Wonderbloom",
    description:
      "An incredible bonsai with thick, juicy, above-ground roots and waxy, oval-shaped, green leaves. As a relatively easy plant to care for, they are the perfect plant to bring some zen into your home",
    toxicTo: "non-toxic",
    careimg: "https://i.postimg.cc/nczd9qq9/share-16.png",
    minTemp: 10,
    maxTemp: 35,
    habitat: "Hilly regions",
    pruning: "Prune as needed to maintain shape",
  },

  {
    img: "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1652786232/okct6ubzzzgteor0ljjm.jpg",
    name: "Japanese Maple",
    knownAs: "Palmate maple",
    description:
      "A woody plant native to East Asia, the japanese maple features hand-shaped leaves with five-pointed lobes that resemble the palm of a hand. It has been cultivated for millennia in Japan for bonsai creation. Extracts from the branches and leaves of this plant are used as medicine in Chinese traditional medicine",
    toxicTo: "non-toxic",
    careimg: "https://i.postimg.cc/KcQqY03y/share-14.png",
    minTemp: 15,
    maxTemp: 30,
    habitat: "Woods, thickets, lowland, mountains",
    pruning: "Prune in late winter",
  },

  {
    img: "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1665482987/k7u5fgzlirdpuizl4l5n.jpg",
    name: "Elephants Ear",
    knownAs: "African mask",
    description:
      "Its pretty plain to see how the elephant ear plant got its name. Its great big leaves are the exact shape of, if not quite the size of, elephants ears. Just as striking are its zebra-striped stems. The combination makes for an eye-catching, sculptural houseplant",
    toxicTo:
      "The sap of elephant Ear is toxic to humans and dogs topically and when ingested. When the leaves are chewed or swallowed, symptoms may include swelling, stinging, and irritation of the mouth and gastrointestinal tract",
    careimg: "https://i.postimg.cc/fyHBgbQb/share-13.png",
    minTemp: 15,
    maxTemp: 30,
    habitat: "Marshes,swampland or around watergardens",
    pruning: "Prune in spring to control size",
  },

  {
    img: "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1675175493/ndv3wycfb8mmay3xvgf0.jpg",
    name: "Chinese Windmill Palm",
    knownAs: "Chusan palm",
    description:
      "With its fabulous fan-shaped leaves, a windmill palm makes an excellent evergreen addition to your outside space. Originally from China and Japan, this outdoor plant has been carefully cultivated for thousands of years. It’s a firm favourite for bringing the jungle vibes to patios, balconies and courtyards",
    toxicTo: "non-toxic",
    careimg: "https://i.postimg.cc/D0fxgXDD/share-12.png",
    minTemp: 5,
    maxTemp: 30,
    habitat: "Montane oak forests",
    pruning: "Prune old fronds as needed",
  },

  {
    img: "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1665482634/dmo2jff2ilijfac9k0mg.jpg",
    name: "Garden Croton",
    knownAs: "Josephs coat",
    description:
      "The garden croton is a showy tropical display that does well indoors or in warm climates. Known for its attractive foliage, this plant can have both color and structural variations in its leaves. Leaf colors can include orange, yellow, scarlet, white, and green, and many times all are present on one plant",
    toxicTo: "non-toxic",
    careimg: "https://i.postimg.cc/3RFLmBLm/share-11.png",
    minTemp: 15,
    maxTemp: 30,
    habitat: "Forests, scrubs",
    pruning: "Prune in spring to encourage branching",
  },

  {
    img: "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1595004524/lox9hk2nulxjbg0ty8im.jpg",
    name: "Boston Fern",
    knownAs: "Fishbone fern",
    description:
      "Boston Fern houseplants are an incredibly popular tropical fern. Their lush curly and wavy green fronds make them the perfect indoor plant to bring some calm into your home. Like many ferns, they can be slightly more involved to keep looking pristine, and need constant humidity to thrive, but with their stunning looks and air-purifying abilities, they are worth the effort",
    toxicTo: "non-toxic",
    careimg: "https://i.postimg.cc/ZRS7WgLJ/share-10.png",
    minTemp: 15,
    maxTemp: 27,
    habitat: "Forests, Swamps",
    pruning: "Prune regularly to maintain shape",
  },

  {
    img: "https://cdn.thestem.co.uk/production/imager-transforms/digitaloceanspaces/product-images/plants/corn-plant/134023/corn-plant-in-seagrass-tribal-planter_46b8f3075629629ddc66a01cf289b97e.webp",
    name: "Corn Plant",
    knownAs: "Fragrant dracaena, Happy plant",
    description:
      "The Corn Plant or Dracaena fragrans is a tropical indoor plant with waxy green foliage. Easy to look after houseplants, they will bring a splash of tropical colour into your home",
    toxicTo: "non-toxic",
    careimg: "https://i.postimg.cc/8CWXPDMy/share-9.png",
    minTemp: 10,
    maxTemp: 30,
    habitat: "Understorey of montane forest, dense stands",
    pruning:
      "To keep your Corn plant in good health year after year, you can choose to either strategically prune it or cut it back each season",
  },

  {
    img: "https://cdn.thestem.co.uk/production/imager-transforms/digitaloceanspaces/product-images/plants/mistletoe-cactus/134128/mistletoe-cactus-in-lisbon-plant-pot_46b8f3075629629ddc66a01cf289b97e.webp",
    name: "Misletoe Cactus",
    knownAs: "Christmas Cactus",
    description:
      "The Mistletoe Cactus or Rhipsalis, is a tropical trailing cactus with light green pencil like stems that will cascade out of the pot. In the wild, these funky succulents are found clinging to trees and at home can trail from a shelf or hanging pot. Unlike other cacti, the Mistletoe Cactus can tolerate light shade and enjoys warm, damp spots - the perfect choice for your bathroom",
    toxicTo: "non-toxic",
    careimg: "https://i.postimg.cc/4xYFqpdR/share-7.png",
    minTemp: 10,
    maxTemp: 30,
    habitat:
      "Low and medium elevation forests, rain forest, riverine forests, mangrove tidal swamp, humus on shady rocks",
    pruning: "Deadhead or remove withered flowers after flowering",
  },

  {
    img: "https://cdn.thestem.co.uk/production/imager-transforms/digitaloceanspaces/product-images/plants/jade-plant/373371/resize_Jade-Plant-1-0056_46b8f3075629629ddc66a01cf289b97e.webp",
    name: "Jade Plant",
    knownAs: "Lucky plant, Money tree, Friendship Tree",
    description:
      "Looking like a miniature fairytale tree, jade plant is one of the world's most popular succulents. Native to southern regions of Africa, it is well adapted to the dry warm air of modern homes. It grows slowly but lives for so long that plants get passed from generation to generation",
    toxicTo:
      "It is toxic to dogs, cats, and horses, and even mildly toxic to humans",
    careimg: "https://i.postimg.cc/fR1gNktt/share-8.png",
    minTemp: 10,
    maxTemp: 25,
    habitat:
      "Shrubs in open forests, rocky slopes, hills, fields, sheltered ravines",
    pruning: "Trim the diseased, withered leaves once a month",
  },

  {
    img: "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1634657858/pddskxawzqmw1ngyrpfw.jpg",
    name: "Nerve plant",
    knownAs: "Silver-nerve plant, Silver-threads",
    description:
      "The nerve plant is an excellent houseplant that is native to South American rainforests since the patterns on the leaves are highly decorative. They are great for providing colour all year round and work really well as an accent plant on a bedside table or shelf",
    toxicTo:
      "non-toxic",
    careimg: "https://i.postimg.cc/Rhb3NWHK/share-22.png",
    minTemp: 15,
    maxTemp: 29,
    habitat: "Tropical rainforest",
    pruning: "Remove yellow or damaged leaves, and trim back any long stems to promote bushiness",
  },

  {
    img: "https://cdn.thestem.co.uk/production/imager-transforms/digitaloceanspaces/product-images/plants/bird-of-paradise/269985/Bird-of-Paradise-white-6-0138_46b8f3075629629ddc66a01cf289b97e.webp",
    name: "Wild Banana",
    knownAs:
      "Wild Strelitzia, Giant white bird of paradise, Natal wild banana, Giant bird-of-paradise tree, Birds tongue flower",
    description:
      "A lush tropical indoor plant with large, deep-green, paddle-shaped leaves. These stunning houseplants work best as architectural centrepieces in bedrooms, bathrooms or living rooms, where you can admire them in all their glory",
    toxicTo: "non-toxic",
    careimg: "https://i.postimg.cc/cJQTGhG2/white-bird.png",
    minTemp: 7,
    maxTemp: 35,
    habitat: "Evergreen coastal forests",
    pruning:
      "While the plant does not require consistent trimming, it can benefit by removing old flowers and any damaged, dead, or diseased leaves. You can also trim back the leaves if it is starting to get too big for the pot and space you are keeping it",
  },
];

connectToMongoDb(mongoDbUrl);

seedDB(Plant, plants).then(() => {
  console.log("Database seeded!");
  mongoose.connection.close();
});
