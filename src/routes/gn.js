const router = require("express").Router();

const User = require("../database/schemas/User");
const prefixes = require("../database/schemas/prefix");

async function data(guildId) {
  let newData = new prefixes({
    Prefix: "r.",
    ChannelID: "mod-logs",
    MuteRole: "muted",
    GuildID: guildId,
  });
  newData.save();
  return newData;
}

router.get("/", async (req, res) => {
  const morningstrings = [
    "May tomorrow be sunny and full of joy. Good night!",
    "May tomorrow be sunny and full of joy. Good night!",
    "Let the fairies make your sleep wonderful. Good night.",
    "I wish you have the sweetest dream of your life tonight. Goodnight.",
    "Good night, my friend! May you have a great day tomorrow.",
    "Sending warm hugs to help you sleep well, my friend! Sweet dreams!",
    "May the day’s tension disappears into the night’s quiet. Good night, friend!",
  ];

  const morninggifs = [
    "http://media1.tenor.com/images/f4b62e341f8cc03869dd95921c8c4d99/tenor.gif",
    "http://media1.tenor.com/images/f4b62e341f8cc03869dd95921c8c4d99/tenor.gif",
    "http://media1.tenor.com/images/a7e8e8f9fd0a8784012d8f14b09da4a8/tenor.gif",
    "http://media1.tenor.com/images/536666c6ed48d260e68ae067a5e7129c/tenor.gif",
    "http://media1.tenor.com/images/b1cdf65b0627586b7ad2274c011b100f/tenor.gif",
    "http://media1.tenor.com/images/6609faf59ef9bc7fb2d22eefe76993c0/tenor.gif",
  ];

  const index = Math.floor(Math.random() * (morningstrings.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
  const index2 = Math.floor(Math.random() * (morninggifs.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
  let hi = {
    url: morninggifs[index2],
    text: morningstrings[index],
  };
  res.send(hi);
});

module.exports = router;
